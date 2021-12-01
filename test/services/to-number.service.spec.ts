import { Container } from 'typescript-ioc';

import { ToNumberService } from '../../src/services';
import { ApiServer } from '../../src/server';
import { buildApiServer } from '../helper';

describe('To-Roman service', () => {

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
        context('Test for I', () => {
            test('for "I" it should return 1', async () => {
                expect(await service.deromanizer("I")).toEqual(1);
            });
        });
    });
});