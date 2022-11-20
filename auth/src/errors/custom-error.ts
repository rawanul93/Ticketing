export abstract class CustomError extends Error {
  abstract statusCode: number; // the subclass of this class MUST have this property

  constructor(message?: string) {
    super(message); // this message is just for console logging purposes
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): {
    message: string;
    field?: string;
  }[];
}
