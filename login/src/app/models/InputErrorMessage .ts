import { ValidatorType } from '../enums/input.enum';

export class InputErrorMessage {
  message: string;
  types: ValidatorType[];

  constructor(message: string, types: ValidatorType[]) {
    this.message = message;
    this.types = types;
  }
}
