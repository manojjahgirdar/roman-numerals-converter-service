import {ContainerConfiguration, Scope} from 'typescript-ioc';
import {ToRomanApi} from './to-roman.api';
import {ToRomanService} from './to-roman.service';

const config: ContainerConfiguration[] = [
  {
    bind: ToRomanApi,
    to: ToRomanService,
    scope: Scope.Singleton
  }
];

export default config;