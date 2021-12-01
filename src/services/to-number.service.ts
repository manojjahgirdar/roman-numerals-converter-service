import {ToNumberApi} from './to-number.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../logger';

export class ToNumberService implements ToNumberApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('ToRomanService');
  }

  async deromanizer(value: string = "I"): Promise<number> {
    this.logger.info(`Invoked deromanizer with roman-no: ${value}`);
    return 1;
  }
}