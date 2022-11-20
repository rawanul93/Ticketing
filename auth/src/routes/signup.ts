import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import { DatabaseConnectionError } from './../errors/database-connection-error';
import { RequestValidationError } from './../errors/request-validation-error';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 6, max: 12 })
      .withMessage('Password must be between 6 and 12 characters long'),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req); // if there are any errors in the request, body will append these errors from the request into a variable that we can get by calling validationResult(req)

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
      // return res.status(400).send(errors.array()); // errors is an object with the errors. We can call .array() to return it as an array.
    }

    throw new DatabaseConnectionError();

    console.log('creating a user.....');
  }
);

export { router as signupRouter };
