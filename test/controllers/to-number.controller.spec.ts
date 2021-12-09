import {Application} from 'express';
import {default as request} from 'supertest';
import {Container, Scope} from 'typescript-ioc';
import { BadRequestError } from 'typescript-rest/dist/server/model/errors';

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

    describe('When checking for valid roman number input', () => {
      const romanInput = "IV";
      const numberOutput = 4;

      beforeEach(() => {
        mockDeRomanizer.mockImplementation(romanInput => numberOutput);
      });

      test(`for ${romanInput} it should return ${numberOutput} with content type as text/html and status code 200`, async () => { 
        await request(app)
          .get(`/to-number`)
          .query({value: romanInput})
          .expect(200)
          .then((response) => {
            expect(parseInt(response.text)).toBe(numberOutput);
            expect(response.headers['content-type']).toBe('text/html; charset=utf-8');
          });
      });
    });

    describe('When checking for invalid roman number input', () => {
      const romanInput = "VIIII";

      beforeEach(() => {
        mockDeRomanizer.mockImplementation(() => {
          throw new BadRequestError();
        });
      });

      test(`for ${romanInput} it should throw Bad Request Error with status code as 400`, async () => { 
        await request(app)
          .get(`/to-number`)
          .query({value: romanInput})
          .expect(400);
      });
    });
  });
});
