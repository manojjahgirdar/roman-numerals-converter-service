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
      test('for 21 it should return "XXI"', async () => {
        expect(await service.romanizer(21)).toEqual("XXI");
      });
      test('for 31 it should return "XXXI"', async () => {
        expect(await service.romanizer(31)).toEqual("XXXI");
      });
      test('for 41 it should return "XLI"', async () => {
        expect(await service.romanizer(41)).toEqual("XLI");
      });
      test('for 51 it should return "LI"', async () => {
        expect(await service.romanizer(51)).toEqual("LI");
      });
      test('for 61 it should return "LVI"', async () => {
        expect(await service.romanizer(61)).toEqual("LXI");
      });
      test('for 71 it should return "LVII"', async () => {
        expect(await service.romanizer(71)).toEqual("LXXI");
      });
      test('for 81 it should return "LVIII"', async () => {
        expect(await service.romanizer(81)).toEqual("LXXXI");
      });
      test('for 91 it should return "XCI"', async () => {
        expect(await service.romanizer(91)).toEqual("XCI");
      });
      test('for 101 it should return "CI"', async () => {
        expect(await service.romanizer(101)).toEqual("CI");
      });
      test('for 401 it should return "CDI"', async () => {
        expect(await service.romanizer(401)).toEqual("CDI");
      });
      test('for 501 it should return "DI"', async () => {
        expect(await service.romanizer(501)).toEqual("DI");
      });
      test('for 901 it should return "CMI"', async () => {
        expect(await service.romanizer(901)).toEqual("CMI");
      });
      test('for 1001 it should return "MI"', async () => {
        expect(await service.romanizer(1001)).toEqual("MI");
      });
      test('for 1401 it should return "MCDI"', async () => {
        expect(await service.romanizer(1401)).toEqual("MCDI");
      });
      test('for 1501 it should return "MDI"', async () => {
        expect(await service.romanizer(1501)).toEqual("MDI");
      });
      test('for 1901 it should return "MXDI"', async () => {
        expect(await service.romanizer(1901)).toEqual("MCMI");
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
      test('for 54 it should return "LIV"', async () => {
        expect(await service.romanizer(54)).toEqual("LIV");
      });
      test('for 94 it should return "XCIV"', async () => {
        expect(await service.romanizer(94)).toEqual("XCIV");
      });
      test('for 104 it should return "CIV"', async () => {
        expect(await service.romanizer(104)).toEqual("CIV");
      });
      test('for 404 it should return "CDIV"', async () => {
        expect(await service.romanizer(404)).toEqual("CDIV");
      });
      test('for 504 it should return "DIV"', async () => {
        expect(await service.romanizer(504)).toEqual("DIV");
      });
      test('for 904 it should return "CMIV"', async () => {
        expect(await service.romanizer(904)).toEqual("CMIV");
      });
      test('for 1004 it should return "MIV"', async () => {
        expect(await service.romanizer(1004)).toEqual("MIV");
      });
      test('for 1404 it should return "MCDIV"', async () => {
        expect(await service.romanizer(1404)).toEqual("MCDIV");
      });
      test('for 1504 it should return "MDIV"', async () => {
        expect(await service.romanizer(1504)).toEqual("MDIV");
      });
      test('for 1904 it should return "MCMIV"', async () => {
        expect(await service.romanizer(1904)).toEqual("MCMIV");
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
      test('for 50 it should return "L"', async () => {
        expect(await service.romanizer(50)).toEqual("L");
      });
      test('for 55 it should return "LV"', async () => {
        expect(await service.romanizer(55)).toEqual("LV");
      });
      test('for 95 it should return "XCV"', async () => {
        expect(await service.romanizer(95)).toEqual("XCV");
      });
      test('for 195 it should return "CXCV"', async () => {
        expect(await service.romanizer(195)).toEqual("CXCV");
      });
      test('for 405 it should return "CDV"', async () => {
        expect(await service.romanizer(405)).toEqual("CDV");
      });
      test('for 505 it should return "DV"', async () => {
        expect(await service.romanizer(505)).toEqual("DV");
      });
      test('for 905 it should return "CMV"', async () => {
        expect(await service.romanizer(905)).toEqual("CMV");
      });
      test('for 1005 it should return "MV"', async () => {
        expect(await service.romanizer(1005)).toEqual("MV");
      });
      test('for 1405 it should return "MCDV"', async () => {
        expect(await service.romanizer(1405)).toEqual("MCDV");
      });
      test('for 1505 it should return "MDV"', async () => {
        expect(await service.romanizer(1505)).toEqual("MDV");
      });
      test('for 1905 it should return "MCMV"', async () => {
        expect(await service.romanizer(1905)).toEqual("MCMV");
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
      test('for 26 it should return "XXVI"', async () => {
        expect(await service.romanizer(26)).toEqual("XXVI");
      });
      test('for 36 it should return "XXXVI"', async () => {
        expect(await service.romanizer(36)).toEqual("XXXVI");
      });
      test('for 46 it should return "XLVI"', async () => {
        expect(await service.romanizer(46)).toEqual("XLVI");
      });
      test('for 58 it should return "LVIII"', async () => {
        expect(await service.romanizer(58)).toEqual("LVIII");
      });
      test('for 98 it should return "XCVIII"', async () => {
        expect(await service.romanizer(98)).toEqual("XCVIII");
      });
      test('for 108 it should return "CVIII"', async () => {
        expect(await service.romanizer(108)).toEqual("CVIII");
      });
      test('for 408 it should return "CDVIII"', async () => {
        expect(await service.romanizer(408)).toEqual("CDVIII");
      });
      test('for 508 it should return "DVIII"', async () => {
        expect(await service.romanizer(508)).toEqual("DVIII");
      });
      test('for 908 it should return "CMVIII"', async () => {
        expect(await service.romanizer(908)).toEqual("CMVIII");
      });
      test('for 1008 it should return "MVIII"', async () => {
        expect(await service.romanizer(1008)).toEqual("MVIII");
      });
      test('for 1408 it should return "MCDVIII"', async () => {
        expect(await service.romanizer(1408)).toEqual("MCDVIII");
      });
      test('for 1508 it should return "MDVIII"', async () => {
        expect(await service.romanizer(1508)).toEqual("MDVIII");
      });
      test('for 1908 it should return "MCMVIII"', async () => {
        expect(await service.romanizer(1908)).toEqual("MCMVIII");
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
      test('for 59 it should return "LIX"', async () => {
        expect(await service.romanizer(59)).toEqual("LIX");
      });
      test('for 99 it should return "XCIX"', async () => {
        expect(await service.romanizer(99)).toEqual("XCIX");
      }); 
      test('for 109 it should return "CIX"', async () => {
        expect(await service.romanizer(109)).toEqual("CIX");
      });
      test('for 409 it should return "CDIX"', async () => {
        expect(await service.romanizer(409)).toEqual("CDIX");
      });
      test('for 509 it should return "DIX"', async () => {
        expect(await service.romanizer(509)).toEqual("DIX");
      });
      test('for 909 it should return "CMIX"', async () => {
        expect(await service.romanizer(909)).toEqual("CMIX");
      });
      test('for 1009 it should return "MIX"', async () => {
        expect(await service.romanizer(1009)).toEqual("MIX");
      });
      test('for 1409 it should return "MCDIX"', async () => {
        expect(await service.romanizer(1409)).toEqual("MCDIX");
      });
      test('for 1509 it should return "MDIX"', async () => {
        expect(await service.romanizer(1509)).toEqual("MDIX");
      });
      test('for 1909 it should return "MCMIX"', async () => {
        expect(await service.romanizer(1909)).toEqual("MCMIX");
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
      test('for 60 it should return "LX"', async () => {
        expect(await service.romanizer(60)).toEqual("LX");
      });
      test('for 70 it should return "LXX"', async () => {
        expect(await service.romanizer(70)).toEqual("LXX");
      });
      test('for 80 it should return "LXXX"', async () => {
        expect(await service.romanizer(80)).toEqual("LXXX");
      });
      test('for 90 it should return "XC"', async () => {
        expect(await service.romanizer(90)).toEqual("XC");
      });
      test('for 100 it should return "C"', async () => {
        expect(await service.romanizer(100)).toEqual("C");
      });
      test('for 400 it should return "CD"', async () => {
        expect(await service.romanizer(400)).toEqual("CD");
      });
      test('for 500 it should return "D"', async () => {
        expect(await service.romanizer(500)).toEqual("D");
      });
      test('for 900 it should return "CM"', async () => {
        expect(await service.romanizer(900)).toEqual("CM");
      });
      test('for 1000 it should return "M"', async () => {
        expect(await service.romanizer(1000)).toEqual("M");
      });
      test('for 3000 it should return "MMM"', async () => {
        expect(await service.romanizer(3000)).toEqual("MMM");
      });
    });
  });
});
