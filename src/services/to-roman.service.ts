import {ToRomanApi} from './to-roman.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../logger';

export class ToRomanService implements ToRomanApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('ToRomanService');
  }

  async romanizer(name: string = 'Romanizer'): Promise<string> {
    this.logger.info(`Generating greeting for ${name}`);
    return `I'm, ${name}!`;
  }
}