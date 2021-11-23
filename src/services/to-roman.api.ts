export abstract class ToRomanApi {
  abstract romanizer(name?: string): Promise<string>;
}  