import {ContainerConfiguration, Scope} from 'typescript-ioc';
import {ToRomanApi} from './to-roman.api';
import {ToRomanService} from './to-roman.service';
import { ToNumberApi} from './to-number.api';
import {ToNumberService} from './to-number.service';

const config: ContainerConfiguration[] = [
  {
    bind: ToRomanApi,
    to: ToRomanService,
    scope: Scope.Singleton
  },
  {
    bind: ToNumberApi,
    to: ToNumberService,
    scope: Scope.Singleton
  }
];

export default config;