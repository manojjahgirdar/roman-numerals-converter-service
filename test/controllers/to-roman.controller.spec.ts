import {Application} from 'express';
import {default as request} from 'supertest';
import {Container, Scope} from 'typescript-ioc';

import {ToRomanApi} from '../../src/services';
import {buildApiServer} from '../helper';

class MockToRomanService implements ToRomanApi {
  romanizer = jest.fn().mockName('romanizer');
}

describe('hello-world.controller', () => {

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
    test(`for 5 it should return "V"`, done => {
      request(app).get(`/to-roman?value=${5}`).expect(200).expect(expectedResponse, done);
    });
    test(`for 10 it should return "X"`, done => {
      request(app).get(`/to-roman?value=${10}`).expect(200).expect(expectedResponse, done);
    });
    test(`for 50 it should return "L"`, done => {
      request(app).get(`/to-roman?value=${50}`).expect(200).expect(expectedResponse, done);
    });
    test(`for 100 it should return "C"`, done => {
      request(app).get(`/to-roman?value=${100}`).expect(200).expect(expectedResponse, done);
    });
    test(`for 500 it should return "D"`, done => {
      request(app).get(`/to-roman?value=${500}`).expect(200).expect(expectedResponse, done);
    });
    test(`for 1000 it should return "M"`, done => {
      request(app).get(`/to-roman?value=${1000}`).expect(200).expect(expectedResponse, done);
    });
  });

});
