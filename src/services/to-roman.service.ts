import {ToRomanApi} from './to-roman.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../logger';

export class ToRomanService implements ToRomanApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('ToRomanService');
  }

  async romanizer(value: number = 1): Promise<string> {
    this.logger.info(`Invoked romanizer with number: ${value}`);

    if (value === 0) return "nulla"; // TDD: Step 1
    if (value < 0 || value > 3999) throw new Error("Invalid number"); // TDD: Step 2

    const romanNumeralMap = {
      1: 'I',
      4: 'IV',  // TDD: Step 4
      5: 'V',   // TDD: Step 5
      9: 'IX',  // TDD: Step 6
      10: 'X',  // TDD: Step 7
      40: 'XL', // TDD: Step 8
      50: 'L',  // TDD: Step 9
      90: 'XC', // TDD: Step 10
      100: 'C', // TDD: Step 11
      400: 'CD',// TDD: Step 12
      500: 'D', // TDD: Step 13
      900: 'CM',// TDD: Step 14
      1000: 'M' // TDD: Step 15
    };

    let romanized: string = '';
    for (let key of Object.keys(romanNumeralMap).reverse()) { // TDD: Step 3
      while (value >= parseInt(key)) {
        romanized += romanNumeralMap[key];  
        value -= parseInt(key); 
      }
    }
    return romanized;   
  }
}