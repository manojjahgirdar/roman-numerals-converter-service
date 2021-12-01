import { Container } from "typescript-ioc";

export * from './to-roman.api';
export * from './to-roman.service';
export * from './to-number.api';
export * from './to-number.service';

import config from './ioc.config';

Container.configure(...config);