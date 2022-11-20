import { ValidationError } from 'express-validator'; //ValidationError is a type. A tupe that comes back when we do a validation attempt using express-validator
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');
    Object.setPrototypeOf(this, RequestValidationError.prototype); // Only because we are extending a built in class. For more info https://stackoverflow.com/a/41102306/6846049
  }

  serializeErrors() {
    return this.errors.map((error) => {
      return { message: error.msg, field: error.param };
    });
  }
}
