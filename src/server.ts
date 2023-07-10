import express, { Express, Request, Response } from 'express'
import todoRouter from './todo/todo.router'
import { GithubUser } from './middleware/github-username.middleware'

const app: Express = express()

app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'API server is running' })
})

app.use('/:username/todo', GithubUser, todoRouter)

export default app
