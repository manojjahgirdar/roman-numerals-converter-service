import { Container } from "typescript-ioc";

export * from './to-roman.api';
export * from './to-roman.service';
import config from './ioc.config';

Container.configure(...config);