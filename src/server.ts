import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import YAML from 'yaml';
import todoRouter from './todo/todo.router';
import pokemonRouter from './pokemon/pokemon.router';
import { router as groceryRouter} from './fruit/grocery.router';
import { Username } from './middleware/username.middleware';

const app: Express = express();

app.use(express.json());
app.use(cors());

// loading api docs
const docFile = fs.readFileSync('./docs/api.yml', 'utf8');
const swaggerDoc = YAML.parse(docFile);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'API server is running' });
});

app.use('/:username/todo', Username, todoRouter);
app.use('/:username/pokemon', Username, pokemonRouter);
app.use('/groceries', groceryRouter);

app.use('*', (_req: Request, res: Response) => {
  res.status(404).json({
    message: 'Route not found'
  });
});

export default app;
