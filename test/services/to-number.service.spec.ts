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
        context('Test for nulla', () => {
            test('for nulla it should return 0', async () => {
                expect(await service.deromanizer("nulla")).toEqual(0);
            });
        });

        context("Test for lowercase characters", () => {
            test('for "iv" it should return 4', async () => {
                expect(await service.deromanizer("iv")).toEqual(4);
            });
        });

        context("Test for the Pattern I, II, III", () => {
            test('for "I" it should return 1', async () => {
                expect(await service.deromanizer("I")).toEqual(1);
            });
            test('for "II" it should return 2', async () => {
                expect(await service.deromanizer("II")).toEqual(2);
            });
            test('for "III" it should return 3', async () => {
                expect(await service.deromanizer("III")).toEqual(3);
            });
            test('for "XXXIII" it should return 33', async () => {
                expect(await service.deromanizer("XXXIII")).toEqual(33);
            });
        });

        context("Test for the Pattern IV, XL, CD", () => {
            test('for "IV" it should return 4', async () => {
                expect(await service.deromanizer("IV")).toEqual(4);
            });
            test('for "XL" it should return 40', async () => {
                expect(await service.deromanizer("XL")).toEqual(40);
            });
            test('for "CD" it should return 400', async () => {
                expect(await service.deromanizer("CD")).toEqual(400);
            });
        });

        context("Test for the Pattern V, L, D", () => {
            test('for "V" it should return 5', async () => {
                expect(await service.deromanizer("V")).toEqual(5);
            });
            test('for "L" it should return 50', async () => {
                expect(await service.deromanizer("L")).toEqual(50);
            });
            test('for "D" it should return 500', async () => {
                expect(await service.deromanizer("D")).toEqual(500);
            });
        });

        context("Test for the Pattern VI, VII, VIII", () => {
            test('for "VI" it should return 6', async () => {
                expect(await service.deromanizer("VI")).toEqual(6);
            });
            test('for "VII" it should return 7', async () => {
                expect(await service.deromanizer("VII")).toEqual(7);
            });
            test('for "VIII" it should return 8', async () => {
                expect(await service.deromanizer("VIII")).toEqual(8);
            });
        });

        context("Test for the Pattern IX, XC, CM", () => {
            test('for "IX" it should return 9', async () => {
                expect(await service.deromanizer("IX")).toEqual(9);
            });
            test('for "XC" it should return 90', async () => {
                expect(await service.deromanizer("XC")).toEqual(90);
            });
            test('for "CM" it should return 900', async () => {
                expect(await service.deromanizer("CM")).toEqual(900);
            });
        });

        context("Test for the Pattern X, C, M", () => {
            test('for "X" it should return 10', async () => {
                expect(await service.deromanizer("X")).toEqual(10);
            });
            test('for "C" it should return 100', async () => {
                expect(await service.deromanizer("C")).toEqual(100);
            });
            test('for "M" it should return 1000', async () => {
                expect(await service.deromanizer("M")).toEqual(1000);
            });
            test('for "MMMCMXCIX" it should return 3999', async () => {
                expect(await service.deromanizer("MMMCMXCIX")).toEqual(3999);
            });
        });

        context('Test for Invalid Roman Numerals', () => {
            context('Roman Numerals other than I, V, X, L, C, D, M', () => {
                let nonRomanNumbers = ["A", "B", "E", "F", "G", "H", "J", "K", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "Y", "Z"];
                test(`for "${nonRomanNumbers}" it should throw an error`, async () => {
                    nonRomanNumbers.forEach(async (nonRomanNumber) => {
                        await expect(service.deromanizer(nonRomanNumber)).rejects.toThrow('Invalid Roman Numeral');
                    });
                });
            });

            context('Roman Numerals like IIII, VIIIII, XXXX', () => {
                test('for "IIII" it should throw an error', async () => {
                    await expect(service.deromanizer("IIII")).rejects.toThrow('Invalid Roman Numeral');
                });
                test('for "VIIIII" it should throw an error', async () => {
                    await expect(service.deromanizer("VIIIII")).rejects.toThrow('Invalid Roman Numeral');
                });
                test('for "XXXX" it should throw an error', async () => {
                    await expect(service.deromanizer("XXXX")).rejects.toThrow('Invalid Roman Numeral');
                });
            });

            context('Numbers or special characters like 1, -5, $', () => {
                test('for "1" it should throw an error', async () => {
                    await expect(service.deromanizer("1")).rejects.toThrow('Invalid Roman Numeral');
                });
                test('for "-5" it should throw an error', async () => {
                    await expect(service.deromanizer("-5")).rejects.toThrow('Invalid Roman Numeral');
                });
                test('for "$" it should throw an error', async () => {
                    await expect(service.deromanizer("$")).rejects.toThrow('Invalid Roman Numeral');
                });
            });

            context("Test invalid units and tens between thousands and hundreeds", () => {
                context('I|IV|V|VI|IX is not valid in between M and C', () => {
                    let units = ["I", "IV", "V", "VI", "IX"];

                    test(`for "MIC", "MIVC", "MVC", "MVIC", "MIXC", "MXC" it should throw an error`, async () => {
                        units.forEach(async (invalidRomanNumber) => {
                            let invalid = "M" + invalidRomanNumber + "C";
                            await expect(service.deromanizer(invalid)).rejects.toThrow('Invalid Roman Numeral');
                        });
                    });
                });

                context('X|XL|L|LX|XC is not valid in between M and C', () => {
                    let tens = ["XL", "L", "LX", "XC"];
                    test(`for "MXLC", "MIVXC", "MVXC", ""MVIXC", "MIXXC", "MXXC" it should throw an error`, async () => {
                        tens.forEach(async (invalidRomanNumber) => {
                            let invalid = "M" + invalidRomanNumber + "C";
                            await expect(service.deromanizer(invalid)).rejects.toThrow('Invalid Roman Numeral');
                        });
                    });
                });
            });

            context("Test invalid thousands and units between hundreds and tens", () => {
                context('M is not valid in between C and X', () => {
                    let hundreds = ["MC", "CM"];
                    test(`for "CMCX", "CCMX" it should throw an error`, async () => {
                        hundreds.forEach(async (invalidRomanNumber) => {
                            let invalid = "C" + invalidRomanNumber + "X";
                            await expect(service.deromanizer(invalid)).rejects.toThrow('Invalid Roman Numeral');
                        });
                    });
                });

                context('I|IV|V|VI|IX is not valid in between C and X', () => {
                    let units = ["IV", "V", "VI", "IX"];
                    test(`for "CIVX", "CVX", "CVIX", "XIXX" it should throw an error`, async () => {
                        units.forEach(async (invalidRomanNumber) => {
                            let invalid = "C" + invalidRomanNumber + "X";
                            await expect(service.deromanizer(invalid)).rejects.toThrow('Invalid Roman Numeral');
                        });
                    });
                });
            });

            context("Test invalid thousands and hundreeds between tens and units", () => {
                context('M is not valid in between L and I', () => {
                    let hundreds = ["M", "MC", "CM"];
                    test(`for "LMI", "LMCI", "LCMI" it should throw an error`, async () => {
                        hundreds.forEach(async (invalidRomanNumber) => {
                            let invalid = "L" + invalidRomanNumber + "I";
                            await expect(service.deromanizer(invalid)).rejects.toThrow('Invalid Roman Numeral');
                        });
                    });
                });

                context('CM|CD|D|C is not valid in between L and I', () => {
                    let hundreds = ["CM", "CD", "D", "C"];
                    test(`for "LCMI", "LCDI", "LDI", "LCI" it should throw an error`, async () => {
                        hundreds.forEach(async (invalidRomanNumber) => {
                            let invalid = "L"+invalidRomanNumber + "I";
                            await expect(service.deromanizer(invalid)).rejects.toThrow('Invalid Roman Numeral');
                        });
                    });
                });
            });
        });
    });
});