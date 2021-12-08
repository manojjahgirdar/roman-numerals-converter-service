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
    
    if (value === 'nulla') return 0;
    
    const romanNumeralMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }
    
    for (let i=0; i<value.length; i++) {
      if (!(value[i] in romanNumeralMap)) throw new Error('Invalid roman number');
      if (!isNaN(Number(value[i]))) throw new Error('Invalid roman number');
    }
    
    let result: number = 0;
    let count: number = 0;
    for (let i = 0; i < value.length; i++) {
      const current = value[i];
      const next = value[i + 1];
      const currentValue = romanNumeralMap[current];
      const nextValue = romanNumeralMap[next];

      if (current === next) count++;
      else count = 0;

      if (count >= 3) throw new SyntaxError('Invalid Roman Numeral') 

      if (current === "I" && next === "V") { 
        result += 4;
        i++;
      } else if (current === "I" && next === "X") {
        result += 9;
        i++;
      } else if (nextValue > currentValue) { 
        result += nextValue - currentValue;
        i++;
      } else { 
        result += currentValue;
      }
    }
    return result;
  }
}