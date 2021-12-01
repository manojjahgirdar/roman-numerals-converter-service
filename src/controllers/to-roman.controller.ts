import {GET, Path, QueryParam} from 'typescript-rest';
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
  async RomanizerFunc(@QueryParam("value") value: number): Promise<string> {
    this.logger.info(`to-roman invoked with number ${value}`);
    return this.service.romanizer(value);
  }
}
