export abstract class ToRomanApi {
  abstract romanizer(value?: number): Promise<string>;
}  