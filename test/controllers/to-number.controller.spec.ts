import {Application} from 'express';
import {default as request} from 'supertest';
import {Container, Scope} from 'typescript-ioc';

import {ToNumberApi} from '../../src/services';
import {buildApiServer} from '../helper';

class MockToNumberService implements ToNumberApi {
  deromanizer = jest.fn().mockName('deromanizer');
}

describe('to-number.controller', () => {

  let app: Application;
  let mockDeRomanizer: jest.Mock;

  beforeEach(() => {
    const apiServer = buildApiServer();

    app = apiServer.getApp();

    Container.bind(ToNumberApi).scope(Scope.Singleton).to(MockToNumberService);

    const mockService: ToNumberApi = Container.get(ToNumberApi);
    mockDeRomanizer = mockService.deromanizer as jest.Mock;
  });

  test('canary validates test infrastructure', () => {
    expect(true).toBe(true);
  });

  describe('Given /to-number', () => {
    const expectedResponse = "1";

    beforeEach(() => {
      mockDeRomanizer.mockReturnValueOnce(Promise.resolve(expectedResponse));
    });

    const input = "I";
    test(`for ${input} it should return 1`, done => {
      request(app)
        .get(`/to-number?value=${input}`)
        .expect(200)
        .expect(expectedResponse)
        .end(done);
    });
  });

});
