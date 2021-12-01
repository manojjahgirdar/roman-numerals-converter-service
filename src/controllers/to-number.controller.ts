import {GET, Path, QueryParam} from 'typescript-rest';
import {Inject} from 'typescript-ioc';
import {ToNumberApi} from '../services';
import {LoggerApi} from '../logger';

@Path('/to-number')
export class ToNumberController {

  @Inject
  service: ToNumberApi;
  @Inject
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child('ToNumberController');
  }
  
  @GET
  async DeRomanizerFunc(@QueryParam("value") value: string): Promise<number> {
    this.logger.info(`to-number invoked with roman-no: ${value}`);
    return this.service.deromanizer(value);
  }
}
