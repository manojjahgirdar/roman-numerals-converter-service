import {Application} from 'express';
import {default as request} from 'supertest';
import {Container, Scope} from 'typescript-ioc';

import {ToRomanApi} from '../../src/services';
import {buildApiServer} from '../helper';

class MockToRomanService implements ToRomanApi {
  romanizer = jest.fn().mockName('romanizer');
}

describe('to-roman.controller', () => {

  let app: Application;
  let mockRomanizer: jest.Mock;

  beforeEach(() => {
    const apiServer = buildApiServer();

    app = apiServer.getApp();

    Container.bind(ToRomanApi).scope(Scope.Singleton).to(MockToRomanService);

    const mockService: ToRomanApi = Container.get(ToRomanApi);
    mockRomanizer = mockService.romanizer as jest.Mock;
  });

  test('canary validates test infrastructure', () => {
    expect(true).toBe(true);
  });

  describe('Given /to-roman', () => {
    const expectedResponse = "I";
    // const expectedResponse = "II";

    beforeEach(() => {
      mockRomanizer.mockReturnValueOnce(Promise.resolve(expectedResponse));
    });

    test(`for 1 it should return "I"`, done => {
      request(app).get(`/to-roman?value=${1}`).expect(200).expect(expectedResponse, done);
    });
  });

});
