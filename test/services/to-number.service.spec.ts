import { Container } from 'typescript-ioc';

import { ToNumberService } from '../../src/services';
import { ApiServer } from '../../src/server';
import { buildApiServer } from '../helper';

describe('To-Number service', () => {

    let app: ApiServer;
    let service: ToNumberService;
    beforeAll(() => {
        app = buildApiServer();

        service = Container.get(ToNumberService);
    });

    test('canary test verifies test infrastructure', () => {
        expect(service).not.toBeUndefined();
    });

    describe('Test the Deromanizer', () => {

        context("Test for appending I's", () => {
            test('for "I" it should return 1', async () => {
                expect(await service.deromanizer("I")).toEqual(1);
            });
            test('for "II" it should return 2', async () => {
                expect(await service.deromanizer("II")).toEqual(2);
            });
            test('for "III" it should return 3', async () => {
                expect(await service.deromanizer("III")).toEqual(3);
            });
            test('for "XI" it should return 11', async () => {
                expect(await service.deromanizer("XI")).toEqual(11);
            });
            test('for "XXXIII" it should return 33', async () => {
                expect(await service.deromanizer("XXXIII")).toEqual(33);
            });
            test('for "XLI" it should return 41', async () => {
                expect(await service.deromanizer("XLI")).toEqual(41);
            });
            test('for "LII" it should return 52', async () => {
                expect(await service.deromanizer("LII")).toEqual(52);
            });
            test('for "LXIII" it should return 63', async () => {
                expect(await service.deromanizer("LXIII")).toEqual(63);
            });
            test('for "LXXI" it should return 71', async () => {
                expect(await service.deromanizer("LXXI")).toEqual(71);
            });
            test('for "LXXXIII" it should return 83', async () => {
                expect(await service.deromanizer("LXXXIII")).toEqual(83);
            });
            test('for "XCII" it should return 91', async () => {
                expect(await service.deromanizer("XCII")).toEqual(92);
            });
            test('for "CIII" it should return 108', async () => {
                expect(await service.deromanizer("CIII")).toEqual(103);
            });
            test('for "CCIII" it should return 208', async () => {
                expect(await service.deromanizer("CCIII")).toEqual(203);
            });
            test('for "CCCIII" it should return 308', async () => {
                expect(await service.deromanizer("CCCIII")).toEqual(303);
            });
            test('for "CDII" it should return 402', async () => {
                expect(await service.deromanizer("CDII")).toEqual(402);
            });
            test('for "DIII" it should return 503', async () => {
                expect(await service.deromanizer("DIII")).toEqual(503);
            });
        });

        context("Test for appending IV, XL, CD", () => {
            test('for "IV" it should return 4', async () => {
                expect(await service.deromanizer("IV")).toEqual(4);
            });
            test('for "XIV" it should return 14', async () => {
                expect(await service.deromanizer("XIV")).toEqual(14);
            });
            test('for "XL" it should return 40', async () => {
                expect(await service.deromanizer("XL")).toEqual(40);
            });
            test('for "XLIV" it should return 44', async () => {
                expect(await service.deromanizer("XLIV")).toEqual(44);
            });
            test('for "XCIV" it should return 94', async () => {
                expect(await service.deromanizer("XCIV")).toEqual(94);
            });
            test('for "CIV" it should return 104', async () => {
                expect(await service.deromanizer("CIV")).toEqual(104);
            });
            test('for "CCIV" it should return 204', async () => {
                expect(await service.deromanizer("CCIV")).toEqual(204);
            });
            test('for "CCCIV" it should return 304', async () => {
                expect(await service.deromanizer("CCCIV")).toEqual(304);
            });
            test('for "CD" it should return 400', async () => {
                expect(await service.deromanizer("CD")).toEqual(400);
            });
            test('for "CDIV" it should return 404', async () => {
                expect(await service.deromanizer("CDIV")).toEqual(404);
            });
            test('for "DIV" it should return 504', async () => {
                expect(await service.deromanizer("DIV")).toEqual(504);
            });
        });

        context("Test for appending V, L, D", () => {
            test('for "V" it should return 5', async () => {
                expect(await service.deromanizer("V")).toEqual(5);
            });
            test('for "XV" it should return 15', async () => {
                expect(await service.deromanizer("XV")).toEqual(15);
            });
            test('for "XLV" it should return 45', async () => {
                expect(await service.deromanizer("XLV")).toEqual(45);
            });
            test('for "L" it should return 50', async () => {
                expect(await service.deromanizer("L")).toEqual(50);
            });
            test('for "XCV" it should return 95', async () => {
                expect(await service.deromanizer("XCV")).toEqual(95);
            });
            test('for "CV" it should return 105', async () => {
                expect(await service.deromanizer("CV")).toEqual(105);
            });
            test('for "CCV" it should return 205', async () => {
                expect(await service.deromanizer("CCV")).toEqual(205);
            });
            test('for "CCCV" it should return 305', async () => {
                expect(await service.deromanizer("CCCV")).toEqual(305);
            });
            test('for "CDV" it should return 405', async () => {
                expect(await service.deromanizer("CDV")).toEqual(405);
            });
            test('for "D" it should return 500', async () => {
                expect(await service.deromanizer("D")).toEqual(500);
            });
            test('for "DV" it should return 505', async () => {
                expect(await service.deromanizer("DV")).toEqual(505);
            });
            
        });

        context("Test for appending V(I's)", () => {
            test('for "VI" it should return 6', async () => {
                expect(await service.deromanizer("VI")).toEqual(6);
            });
            test('for "VII" it should return 7', async () => {
                expect(await service.deromanizer("VII")).toEqual(7);
            });
            test('for "VIII" it should return 8', async () => {
                expect(await service.deromanizer("VIII")).toEqual(8);
            });
            test('for "XVIII" it should return 18', async () => {
                expect(await service.deromanizer("XVIII")).toEqual(18);
            });
            test('for "XLVII" it should return 47', async () => {
                expect(await service.deromanizer("XLVII")).toEqual(47);
            });
            test('for "XCVIII" it should return 98', async () => {
                expect(await service.deromanizer("XCVIII")).toEqual(98);
            });
            test('for "CVIII" it should return 108', async () => {
                expect(await service.deromanizer("CVIII")).toEqual(108);
            });
            test('for "CCVIII" it should return 208', async () => {
                expect(await service.deromanizer("CCVIII")).toEqual(208);
            });
            test('for "CCCVIII" it should return 308', async () => {
                expect(await service.deromanizer("CCCVIII")).toEqual(308);
            });
            test('for "CDVII" it should return 407', async () => {
                expect(await service.deromanizer("CDVII")).toEqual(407);
            });
            test('for "DVII" it should return 507', async () => {
                expect(await service.deromanizer("DVII")).toEqual(507);
            });
        });

        context("Test for appending IX, XC", () => {
            test('for "IX" it should return 9', async () => {
                expect(await service.deromanizer("IX")).toEqual(9);
            });
            test('for "XIX" it should return 19', async () => {
                expect(await service.deromanizer("XIX")).toEqual(19);
            });
            test('for "XLIX" it should return 49', async () => {
                expect(await service.deromanizer("XLIX")).toEqual(49);
            });
            test('for "XC" it should return 90', async () => {
                expect(await service.deromanizer("XC")).toEqual(90);
            });
            test('for "XCIX" it should return 99', async () => {
                expect(await service.deromanizer("XCIX")).toEqual(99);
            });
            test('for "CIX" it should return 109', async () => {
                expect(await service.deromanizer("CIX")).toEqual(109);
            });
            test('for "CXCIX" it should return 199', async () => {
                expect(await service.deromanizer("CXCIX")).toEqual(199);
            });
            test('for "CCIX" it should return 209', async () => {
                expect(await service.deromanizer("CCIX")).toEqual(209);
            });
            test('for "CCXCIX" it should return 299', async () => {
                expect(await service.deromanizer("CCXCIX")).toEqual(299);
            });
            test('for "CCCIX" it should return 309', async () => {
                expect(await service.deromanizer("CCCIX")).toEqual(309);
            });
            test('for "CCCXCIX" it should return 399', async () => {
                expect(await service.deromanizer("CCCXCIX")).toEqual(399);
            });
            test('for "CDIX" it should return 409', async () => {
                expect(await service.deromanizer("CDIX")).toEqual(409);
            });
            test('for "DIX" it should return 509', async () => {
                expect(await service.deromanizer("DIX")).toEqual(509);
            });
            test('for "CM" it should return 900', async () => {
                expect(await service.deromanizer("CM")).toEqual(900);
            });
        });

        context("Test for appending X, C, M", () => {
            test('for "X" it should return 10', async () => {
                expect(await service.deromanizer("X")).toEqual(10);
            });
            test('for "XX" it should return 20', async () => {
                expect(await service.deromanizer("XX")).toEqual(20);
            });
            test('for "XXX" it should return 30', async () => {
                expect(await service.deromanizer("XXX")).toEqual(30);
            });
            test('for "LX" it should return 60', async () => {
                expect(await service.deromanizer("LX")).toEqual(60);
            });
            test('for "LXX" it should return 70', async () => {
                expect(await service.deromanizer("LXX")).toEqual(70);
            });
            test('for "LXXX" it should return 80', async () => {
                expect(await service.deromanizer("LXXX")).toEqual(80);
            });
            test('for "C" it should return 100', async () => {
                expect(await service.deromanizer("C")).toEqual(100);
            });
            test('for "CC" it should return 200', async () => {
                expect(await service.deromanizer("CC")).toEqual(200);
            });
            test('for "CCC" it should return 300', async () => {
                expect(await service.deromanizer("CCC")).toEqual(300);
            });
            test('for "DX" it should return 600', async () => {
                expect(await service.deromanizer("DC")).toEqual(600);
            });
            test('for "DXX" it should return 700', async () => {
                expect(await service.deromanizer("DCC")).toEqual(700);
            });
            test('for "DXXX" it should return 800', async () => {
                expect(await service.deromanizer("DCCC")).toEqual(800);
            });
            test('for "M" it should return 1000', async () => {
                expect(await service.deromanizer("M")).toEqual(1000);
            });
            test('for "MMMCMXCIX" it should return 3999', async () => {
                expect(await service.deromanizer("MMMCMXCIX")).toEqual(3999);
            });
        });


        context('Test for Invalid Roman Numbers (other than I, V, X, L, C, D, M)', () => {
            test('for "A" it should throw an error', async () => {
                expect(async () => await service.deromanizer("A")).rejects.toThrowError("Invalid roman number");
            });
            test('for "B" it should throw an error', async () => {
                expect(async () => await service.deromanizer("B")).rejects.toThrowError("Invalid roman number");
            });
            test('for "E" it should throw an error', async () => {
                expect(async () => await service.deromanizer("E")).rejects.toThrowError("Invalid roman number");
            });
            test('for "F" it should throw an error', async () => {
                expect(async () => await service.deromanizer("F")).rejects.toThrowError("Invalid roman number");
            });
            test('for "G" it should throw an error', async () => {
                expect(async () => await service.deromanizer("G")).rejects.toThrowError("Invalid roman number");
            });
            test('for "H" it should throw an error', async () => {
                expect(async () => await service.deromanizer("H")).rejects.toThrowError("Invalid roman number");
            });
            test('for "J" it should throw an error', async () => {
                expect(async () => await service.deromanizer("J")).rejects.toThrowError("Invalid roman number");
            });
            test('for "N" it should throw an error', async () => {
                expect(async () => await service.deromanizer("N")).rejects.toThrowError("Invalid roman number");
            });
            test('for "O" it should throw an error', async () => {
                expect(async () => await service.deromanizer("O")).rejects.toThrowError("Invalid roman number");
            });
            test('for "P" it should throw an error', async () => {
                expect(async () => await service.deromanizer("P")).rejects.toThrowError("Invalid roman number");
            });
            test('for "Q" it should throw an error', async () => {
                expect(async () => await service.deromanizer("Q")).rejects.toThrowError("Invalid roman number");
            });
            test('for "R" it should throw an error', async () => {
                expect(async () => await service.deromanizer("R")).rejects.toThrowError("Invalid roman number");
            });
            test('for "S" it should throw an error', async () => {
                expect(async () => await service.deromanizer("S")).rejects.toThrowError("Invalid roman number");
            });
            test('for "T" it should throw an error', async () => {
                expect(async () => await service.deromanizer("T")).rejects.toThrowError("Invalid roman number");
            });
            test('for "U" it should throw an error', async () => {
                expect(async () => await service.deromanizer("U")).rejects.toThrowError("Invalid roman number");
            });
            test('for "W" it should throw an error', async () => {
                expect(async () => await service.deromanizer("W")).rejects.toThrowError("Invalid roman number");
            });
            test('for "Y" it should throw an error', async () => {
                expect(async () => await service.deromanizer("Y")).rejects.toThrowError("Invalid roman number");
            });
            test('for "Z" it should throw an error', async () => {
                expect(async () => await service.deromanizer("Z")).rejects.toThrowError("Invalid roman number");
            });
        });

        context('Test for Invalid Roman Numbers (like IIII, IIIII)', () => {
            test('for "IIII" it should throw an error', async () => {
                expect(async () => await service.deromanizer("IIII")).rejects.toThrowError("Invalid roman number");
            });
            test('for "IIIII" it should throw an error', async () => {
                expect(async () => await service.deromanizer("IIIII")).rejects.toThrowError("Invalid roman number");
            });
            test('for "VIIII" it should throw an error', async () => {
                expect(async () => await service.deromanizer("VIIII")).rejects.toThrowError("Invalid roman number");
            });
            test('for "VIIIII" it should throw an error', async () => {
                expect(async () => await service.deromanizer("VIIIII")).rejects.toThrowError("Invalid roman number");
            });
            test('for "XXXX" it should throw an error', async () => {
                expect(async () => await service.deromanizer("XXXX")).rejects.toThrowError("Invalid roman number");
            });
        });

        context('Test for Invalid Roman Numbers (like 1, 5, 10 -1)', () => {
            test('for "1" it should throw an error', async () => {
                expect(async () => await service.deromanizer("1")).rejects.toThrowError("Invalid roman number");
            });
            test('for "5" it should throw an error', async () => {
                expect(async () => await service.deromanizer("5")).rejects.toThrowError("Invalid roman number");
            });
            test('for "10" it should throw an error', async () => {
                expect(async () => await service.deromanizer("10")).rejects.toThrowError("Invalid roman number");
            });
            test('for "-1" it should throw an error', async () => {
                expect(async () => await service.deromanizer("-1")).rejects.toThrowError("Invalid roman number");
            });
        });
    });
});