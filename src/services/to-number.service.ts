import {ToNumberApi} from './to-number.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../logger';

export class ToNumberService implements ToNumberApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('ToRomanService');
  }

  async deromanizer(value: string = "I"): Promise<number> {
    this.logger.info(`Invoked deromanizer with roman-no: ${value}`);
    
    const romanNumeralMap = {
      I: 1,
      V: 5, // TDD: Step 3
      X: 10, // TDD: Step 5
      L: 50, // TDD: Step 7
      C: 100, // TDD: Step 8
      D: 500, // TDD: Step 9
      M: 1000 // TDD: Step 10
    }

    
    for (let i=0; i<value.length; i++) {
      if (!(value[i] in romanNumeralMap)) throw new Error('Invalid roman number'); // TDD: Step 11
      if (!isNaN(Number(value[i]))) throw new Error('Invalid roman number'); // TDD: Step 12
    }
    
    let result = 0;
    let count: number = 0;
    for (let i = 0; i < value.length; i++) {
      const current = value[i];
      const next = value[i + 1];
      const currentValue = romanNumeralMap[current];
      const nextValue = romanNumeralMap[next];

      if (current === next) count++;
      else count = 0;

      if (count >= 3) throw new Error('Invalid roman number');  // TDD: Step 2

      if (current === "I" && next === "V") {  // TDD: Step 4
        result += 4;
        i++;
      } else if (current === "I" && next === "X") { // TDD: Step 6
        result += 9;
        i++;
      } else if (nextValue > currentValue) {  // TDD: Step 1
        result += nextValue - currentValue;
        i++;
      } else { 
        result += currentValue;
      }
    }
    return result;
  }
}