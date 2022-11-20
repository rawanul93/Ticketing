import express from 'express';
import 'express-async-errors';
//Middlewares
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';

// Routes
import { currentUserRouter } from './routes/current-user';
import { signInRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';

const app = express();
app.use(express.json());

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Listening on 3000!!!!!!');
});
