import {ToNumberApi} from './to-number.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../logger';
import { BadRequestError } from 'typescript-rest/dist/server/model/errors';

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
    
    if (value.toLowerCase() === 'nulla') return 0;
    
    this.validateRoman(value);
    
    return this.convertToNumber(value);
  }

  private validateRoman(value: string) {
    const RE = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if (!(RE.test(value.toUpperCase())))
      throw new BadRequestError('Invalid Roman Numeral');
  }

  private convertToNumber(value: string): number {
    let result: number = 0;
    value = value.toUpperCase();
    
    for (let i = 0; i < value.length; i++) {
      const current = value[i];
      const next = value[i + 1];
      const currentValue = this.getRomanNumeralMap()[current];
      const nextValue = this.getRomanNumeralMap()[next];

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

  private getRomanNumeralMap(): object {
    return {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  }
}


