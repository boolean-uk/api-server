import express, { Express, Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
import fs from 'fs'
import YAML from 'yaml'
import todoRouter from './todo/todo.router'
import { GithubUser } from './middleware/github-username.middleware'

const app: Express = express()

app.use(express.json())

// loading api docs
const docFile = fs.readFileSync('./docs/api.yml', 'utf8')
const swaggerDoc = YAML.parse(docFile)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'API server is running' })
})

app.use('/:username/todo', GithubUser, todoRouter)

export default app
