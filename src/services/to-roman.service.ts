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

    if (value === 0){
      return "nulla";
    }

    const romanNumeralMap = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M'
    };

    let romanized = '';
    // select key in descending order
    for (let key of Object.keys(romanNumeralMap).reverse()) {
      while (value >= parseInt(key)) {
        romanized += romanNumeralMap[key];  
        value -= parseInt(key); 
      }
    }
    return romanized;
    
  }
}