import cors from 'cors';
import express from 'express';
import { getEnv } from 'helpers';
import morgan from 'morgan';
import { INewError } from 'type';
import { swaggerRouter } from 'swagger/router';

const PORT = getEnv('PORT', '5000');
const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(morgan(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/', swaggerRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err: INewError, req: Req, res: Res<any>, next: Next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/docs`);
});
