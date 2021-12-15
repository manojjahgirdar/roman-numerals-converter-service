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

  private RomanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  async deromanizer(value: string = "I"): Promise<number> {
    this.logger.info(`Invoked deromanizer with roman-no: ${value}`);
    
    const uppercaseValue = value.toUpperCase();

    if (uppercaseValue === 'NULLA') return 0;
    
    this.validateRoman(uppercaseValue);
    
    return this.convertToNumber(uppercaseValue);
  }

  private validateRoman(uppercaseValue: string) {
    const RE = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if (!(RE.test(uppercaseValue)))
      throw new BadRequestError('Invalid Roman Numeral');
  }

  private convertToNumber(uppercaseValue: string): number {
    let result: number = 0;
    
    for (let i = 0; i < uppercaseValue.length; i++) {
      const current = uppercaseValue[i];
      const next = uppercaseValue[i + 1];
      const currentValue = this.RomanNumeralMap[current];
      const nextValue = this.RomanNumeralMap[next];

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


