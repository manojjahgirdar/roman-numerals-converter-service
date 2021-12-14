import {ToRomanApi} from './to-roman.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../logger';
import { Errors } from 'typescript-rest';

export class ToRomanService implements ToRomanApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('ToRomanService');
  }

  private romanNumeralMap = {
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

  async romanizer(value: number = 1): Promise<string> {
    this.logger.info(`Invoked romanizer with number: ${value}`);
    
    this.validateNumber(value);

    if (value === 0) return "nulla"; 
    return this.convertToRoman(value);
  }

  private validateNumber(value: number): void {
    if (value < 0 || value > 3999) throw new Errors.BadRequestError("Invalid number");
    if (value % 1 !== 0) throw new Errors.BadRequestError("Invalid number");
  }
  
  private convertToRoman(value: number): string {
    let romanized: string = '';
    for (let key of Object.keys(this.romanNumeralMap).reverse()) {
      while (value >= parseInt(key)) {
        romanized += this.romanNumeralMap[key];
        value -= parseInt(key);
      }
    }
    return romanized;
  }
}