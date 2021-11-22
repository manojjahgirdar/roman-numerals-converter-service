import {Container} from 'typescript-ioc';

import {ToRomanService} from '../../src/services';
import {ApiServer} from '../../src/server';
import {buildApiServer} from '../helper';

describe('Hello World service', () =>{

  let app: ApiServer;
  let service: ToRomanService;
  beforeAll(() => {
    app = buildApiServer();

    service = Container.get(ToRomanService);
  });

  test('canary test verifies test infrastructure', () => {
    expect(service).not.toBeUndefined();
  });

  describe('Given greeting()', () => {
    // context('when "Juan" provided', () => {
    //   const name = 'Juan';
    //   test('then return "Hello, Juan!"', async () => {
    //     expect(await service.romanizer(name)).toEqual(`Hello, ${name}!`);
    //   });
    // });

    context('when no name provided', () => {
      test('then return "Hello, World!"', async () => {
        expect(await service.romanizer()).toEqual("I'm, Romanizer!");
      });
    })
  });
});
