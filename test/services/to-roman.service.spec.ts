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

      test('for 11 it should return "XI"', async () => {
        expect(await service.romanizer(11)).toEqual("XI");
      });
      test('for 12 it should return "XII"', async () => {
        expect(await service.romanizer(12)).toEqual("XII");
      });
      test('for 13 it should return "XIII"', async () => {
        expect(await service.romanizer(13)).toEqual("XIII");
      });

      test('for 21 it should return "XXI"', async () => {
        expect(await service.romanizer(21)).toEqual("XXI");
      });
      test('for 22 it should return "XXII"', async () => {
        expect(await service.romanizer(22)).toEqual("XXII");
      });
      test('for 23 it should return "XXIII"', async () => {
        expect(await service.romanizer(23)).toEqual("XXIII");
      });

      test('for 31 it should return "XXXI"', async () => {
        expect(await service.romanizer(31)).toEqual("XXXI");
      });
      test('for 32 it should return "XXXII"', async () => {
        expect(await service.romanizer(32)).toEqual("XXXII");
      });
      test('for 33 it should return "XXXIII"', async () => {
        expect(await service.romanizer(33)).toEqual("XXXIII");
      });

      test('for 41 it should return "XLI"', async () => {
        expect(await service.romanizer(41)).toEqual("XLI");
      });
      test('for 42 it should return "XLII"', async () => {
        expect(await service.romanizer(42)).toEqual("XLII");
      });
      test('for 43 it should return "XLIII"', async () => {
        expect(await service.romanizer(43)).toEqual("XLIII");
      });
    });

    context('Test for the Pattern IV, XIV, XLIV', () => {
      test('for 4 it should return "IV"', async () => {
        expect(await service.romanizer(4)).toEqual("IV");
      });
      test('for 14 it should return "XIV"', async () => {
        expect(await service.romanizer(14)).toEqual("XIV");
      });
      test('for 24 it should return "XXIV"', async () => {
        expect(await service.romanizer(24)).toEqual("XXIV");
      });
      test('for 34 it should return "XXXIV"', async () => {
        expect(await service.romanizer(34)).toEqual("XXXIV");
      });
      test('for 44 it should return "XLIV"', async () => {
        expect(await service.romanizer(44)).toEqual("XLIV");
      });
    });

    context('Test for the Pattern V, L, D', () => {
      test('for 5 it should return "V"', async () => {
        expect(await service.romanizer(5)).toEqual("V");
      });
      test('for 15 it should return "XV"', async () => {
        expect(await service.romanizer(15)).toEqual("XV");
      });
      test('for 25 it should return "XXV"', async () => {
        expect(await service.romanizer(25)).toEqual("XXV");
      });
      test('for 35 it should return "XXXV"', async () => {
        expect(await service.romanizer(35)).toEqual("XXXV");
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

      test('for 16 it should return "XVI"', async () => {
        expect(await service.romanizer(16)).toEqual("XVI");
      });
      test('for 17 it should return "XVII"', async () => {
        expect(await service.romanizer(17)).toEqual("XVII");
      });
      test('for 18 it should return "XVIII"', async () => {
        expect(await service.romanizer(18)).toEqual("XVIII");
      });
      
      test('for 26 it should return "XXVI"', async () => {
        expect(await service.romanizer(26)).toEqual("XXVI");
      });
      test('for 27 it should return "XXVII"', async () => {
        expect(await service.romanizer(27)).toEqual("XXVII");
      });
      test('for 28 it should return "XXVIII"', async () => {
        expect(await service.romanizer(28)).toEqual("XXVIII");
      });

      test('for 36 it should return "XXXVI"', async () => {
        expect(await service.romanizer(36)).toEqual("XXXVI");
      });
      test('for 37 it should return "XXXVII"', async () => {
        expect(await service.romanizer(37)).toEqual("XXXVII");
      });
      test('for 38 it should return "XXXVIII"', async () => {
        expect(await service.romanizer(38)).toEqual("XXXVIII");
      });

      test('for 46 it should return "XLVI"', async () => {
        expect(await service.romanizer(46)).toEqual("XLVI");
      });
      test('for 47 it should return "XLII"', async () => {
        expect(await service.romanizer(47)).toEqual("XLVII");
      });
      test('for 48 it should return "XLIII"', async () => {
        expect(await service.romanizer(48)).toEqual("XLVIII");
      });
    });

    context('Test for the Pattern IX', () => {
      test('for 9 it should return "IX"', async () => {
        expect(await service.romanizer(9)).toEqual("IX");
      });
      test('for 19 it should return "XIX"', async () => {
        expect(await service.romanizer(19)).toEqual("XIX");
      });
      test('for 29 it should return "XXIX"', async () => {
        expect(await service.romanizer(29)).toEqual("XXIX");
      });
      test('for 39 it should return "XIX"', async () => {
        expect(await service.romanizer(39)).toEqual("XXXIX");
      });
      test('for 49 it should return "XLIX"', async () => {
        expect(await service.romanizer(49)).toEqual("XLIX");
      });
    });

    context('Test for the Pattern X, C, M', () => {
      test('for 10 it should return "X"', async () => {
        expect(await service.romanizer(10)).toEqual("X");
      });
      test('for 20 it should return "XX"', async () => {
        expect(await service.romanizer(20)).toEqual("XX");
      });
      test('for 30 it should return "XXX"', async () => {
        expect(await service.romanizer(30)).toEqual("XXX");
      });
      test('for 40 it should return "XL"', async () => {
        expect(await service.romanizer(40)).toEqual("XL");
      });
      test('for 50 it should return "L"', async () => {
        expect(await service.romanizer(50)).toEqual("L");
      });
    });
  });
});
