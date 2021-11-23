import {GET, Path, PathParam} from 'typescript-rest';
import {Inject} from 'typescript-ioc';
import {ToRomanApi} from '../services';
import {LoggerApi} from '../logger';

@Path('/to-roman')
export class ToRomanController {

  @Inject
  service: ToRomanApi;
  @Inject
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child('ToRomanController');
  }

  @GET
  async RomanizerFunc(): Promise<string> {
    this.logger.info('Saying hello from Romanizer');
    return this.service.romanizer();
  }
}
