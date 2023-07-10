import { Request, Response } from 'express'
import { TodoRepository } from './todo.repository'
import { UserTodoRepository } from './user-todo.repository'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'

const repo = new TodoRepository()

const getRepoFromUsername = (req: Request): UserTodoRepository => {
  const { username } = req.context
  const todoRepo = repo.getOrCreateUserRepository(username)
  return todoRepo
}

export const GetAllTodos = (req: Request, res: Response) => {
  const todoRepo = getRepoFromUsername(req)

  const todos = todoRepo.getTodos()

  return res.status(200).json(todos)
}

export const CreateTodo = (req: Request, res: Response) => {
  const dto: CreateTodoDto = req.body
  const todoRepo = getRepoFromUsername(req)

  const todo = todoRepo.createTodo(dto)

  return res.status(201).json(todo)
}

export const UpdateTodo = (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const dto: UpdateTodoDto = req.body
  const todoRepo = getRepoFromUsername(req)

  const todo = todoRepo.updateTodo(id, dto)
  if (!todo) {
    return res.status(404).json({ error: 'todo not found' })
  }

  return res.status(200).json(todo)
}

export const DeleteTodo = (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const todoRepo = getRepoFromUsername(req)

  const todo = todoRepo.deleteTodo(id)
  if (!todo) {
    return res.status(404).json({ error: 'todo not found' })
  }

  return res.status(200).json(todo)
}
