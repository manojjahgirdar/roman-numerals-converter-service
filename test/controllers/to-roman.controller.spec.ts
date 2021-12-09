import {Application} from 'express';
import {default as request} from 'supertest';
import {Container, Scope} from 'typescript-ioc';
import { BadRequestError } from 'typescript-rest/dist/server/model/errors';

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
    describe('When checking for valid numeric input', () => {
      const numericInput = 24;
      const romanOutput = "XXIV";

      beforeEach(() => {
        mockRomanizer.mockImplementation(numericInput => romanOutput);
      });

      test(`for ${numericInput} it should return ${romanOutput} with content type as text/html and status code 200`, async () => { 
        await request(app)
          .get(`/to-roman`)
          .query({value: numericInput})
          .expect(200)
          .then((response) => {
            expect(response.text).toBe(romanOutput);
            expect(response.headers['content-type']).toBe('text/html; charset=utf-8');
          });
      });

    });
    describe('When checking for invalid numeric input', () => {
      const numericInput = -1;

      beforeEach(() => {
        mockRomanizer.mockImplementation(() => {
          throw new BadRequestError();
        });
      });

      test(`for ${numericInput} it should throw Bad Request Error with status code as 400`, async () => { 
        await request(app)
          .get(`/to-roman`)
          .query({value: numericInput})
          .expect(400);
      });
    });
    describe('When checking for non numeric input', () => {
      const numericInput = "XIV";

      beforeEach(() => {
        mockRomanizer.mockImplementation(() => {
          throw new BadRequestError();
        });
      });

      test(`for ${numericInput} it should throw Bad Request Error with status code as 400`, async () => {
        await request(app)
          .get(`/to-roman`)
          .query({value: numericInput})
          .expect(400);
      });
    });
  });

});
