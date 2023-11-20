import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import YAML from 'yaml';
import todoRouter from './todo/todo.router';
import pokemonRouter from './pokemon/pokemon.router';
import contactRouter from './contact/contact.router';
import postRouter from './post/post.router';
import allRouter from './all/all.router';
import artRouter from './art/art.router';
import { router as groceryRouter} from './fruit/grocery.router';
import { Username } from './middleware/username.middleware';
import cron from 'node-cron';
import clearAllData from './service/data-reset';
import path from 'path';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use('/', express.static(path.join(__dirname, 'public')))

// loading api docs
const docFile = fs.readFileSync('./docs/api.yml', 'utf8');
const swaggerDoc = YAML.parse(docFile);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'API server is running' });
});

app.use('/:username/todo', Username, todoRouter);
app.use('/:username/pokemon', Username, pokemonRouter);
app.use('/:username/contact', Username, contactRouter);
app.use('/:username/post', Username, postRouter);
app.use('/:username/admin', Username, allRouter);
app.use('/art', artRouter);
app.use('/groceries', groceryRouter);

app.use('*', (_req: Request, res: Response) => {
  res.status(404).json({
    message: 'Route not found'
  });
});

app.use((_err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  res.status(500).json({
    message: 'An unknown error occurred. Is your JSON formatted correctly? Make sure there are no trailing commas!'
  });
});

cron.schedule('0 1 * * *', () => { // Run at 1am London time
  clearAllData();
  console.log('All data has been reset!');
}, { scheduled: true, timezone: 'Europe/London' });

export default app;
