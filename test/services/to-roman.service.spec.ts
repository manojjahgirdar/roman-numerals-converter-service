import {Container} from 'typescript-ioc';

import {ToRomanService} from '../../src/services';
import {ApiServer} from '../../src/server';
import {buildApiServer} from '../helper';

describe('To-Roman service', () =>{

  let app: ApiServer;
  let service: ToRomanService;
  beforeAll(() => {
    app = buildApiServer();

    service = Container.get(ToRomanService);
  });

  test('canary test verifies test infrastructure', () => {
    expect(service).not.toBeUndefined();
  });

  describe('Test the Romanizer', () => {
    context('Test for 0', () => {
      test('for 0 it should return "nulla"', async () => {
        expect(await service.romanizer(0)).toEqual("nulla");
      });
    });
    context('Test for the Pattern I, II, III', () => {
      test('for 1 it should return "I"', async () => {
        expect(await service.romanizer(1)).toEqual("I");
      });
      test('for 2 it should return "II"', async () => {
        expect(await service.romanizer(2)).toEqual("II");
      });
      test('for 3 it should return "III"', async () => {
        expect(await service.romanizer(3)).toEqual("III");
      });
    });

    context('Test for the Pattern IV, XL, CD', () => {
      test('for 4 it should return "IV"', async () => {
        expect(await service.romanizer(4)).toEqual("IV");
      });
      test('for 40 it should return "XL"', async () => {
        expect(await service.romanizer(40)).toEqual("XL");
      });
      test('for 400 it should return "CD"', async () => {
        expect(await service.romanizer(400)).toEqual("CD");
      });
    });

    context('Test for the Pattern V, L, D', () => {
      test('for 5 it should return "V"', async () => {
        expect(await service.romanizer(5)).toEqual("V");
      });
      test('for 50 it should return "L"', async () => {
        expect(await service.romanizer(50)).toEqual("L");
      });
      test('for 500 it should return "D"', async () => {
        expect(await service.romanizer(500)).toEqual("D");
      });
    });

    context('Test for the Pattern VI, VII, VIII', () => { 
      test('for 6 it should return "VI"', async () => {
        expect(await service.romanizer(6)).toEqual("VI");
      });
      test('for 7 it should return "VII"', async () => {
        expect(await service.romanizer(7)).toEqual("VII");
      });
      test('for 8 it should return "VIII"', async () => {
        expect(await service.romanizer(8)).toEqual("VIII");
      });
    });

    context('Test for the Pattern IX, XC, CM', () => {
      test('for 9 it should return "IX"', async () => {
        expect(await service.romanizer(9)).toEqual("IX");
      });
      test('for 90 it should return "XC"', async () => {
        expect(await service.romanizer(90)).toEqual("XC");
      });
      test('for 900 it should return "CM"', async () => {
        expect(await service.romanizer(900)).toEqual("CM");
      });
    });

    context('Test for the Pattern X, C, M', () => {
      test('for 10 it should return "X"', async () => {
        expect(await service.romanizer(10)).toEqual("X");
      });
      test('for 100 it should return "C"', async () => {
        expect(await service.romanizer(100)).toEqual("C");
      });
      test('for 1000 it should return "M"', async () => {
        expect(await service.romanizer(1000)).toEqual("M");
      });
      test('for 3999 it should return "MMMCMXCIX"', async () => {
        expect(await service.romanizer(3999)).toEqual("MMMCMXCIX");
      });
    });

    context('Test for Invalid number', () => {
      test('for -1 it should throw an error', async () => {
        await expect(service.romanizer(-1)).rejects.toThrow('Invalid number');
      });
      test('for 4000 it should throw an error', async () => {
        await expect(service.romanizer(4000)).rejects.toThrow('Invalid number');
      });
      test('for float number 3.14 it should throw an error', async () => {
        await expect(service.romanizer(3.14)).rejects.toThrow('Invalid number');
      })
    });
  });
});
