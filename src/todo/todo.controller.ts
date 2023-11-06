import { Response } from 'express';
import { UserTodoRepository } from './user-todo.repository';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Context } from '../middleware/context';
import { Repository } from '../service/repository';

const repo = new Repository<UserTodoRepository>(UserTodoRepository);

const getRepoFromUsername = (req: Context): UserTodoRepository => {
  const username = req.context?.username || '';
  return repo.getOrCreateUserRepository(username);
};

export const GetAllTodos = (req: Context, res: Response) => {
  const todoRepo = getRepoFromUsername(req);

  const todos = todoRepo.getAll();

  return res.status(200).json(todos);
};

export const GetTodoByID = (req: Context, res: Response) => {
  const id = Number(req.params.id);
  const todoRepo = getRepoFromUsername(req);

  const todo = todoRepo.getById(id);
  if (!todo) {
    return res.status(404).json({ error: 'todo not found' });
  }
  return res.status(200).json(todo);
};

export const CreateTodo = (req: Context, res: Response) => {
  const dto: CreateTodoDto = req.body;
  const todoRepo = getRepoFromUsername(req);

  const todo = todoRepo.create(dto);

  return res.status(201).json(todo);
};

export const UpdateTodo = (req: Context, res: Response) => {
  const id = Number(req.params.id);
  const dto: UpdateTodoDto = req.body;
  const todoRepo = getRepoFromUsername(req);

  const todo = todoRepo.update(id, dto);
  if (!todo) {
    return res.status(404).json({ error: 'todo not found' });
  }

  return res.status(200).json(todo);
};

export const DeleteTodo = (req: Context, res: Response) => {
  const id = Number(req.params.id);
  const todoRepo = getRepoFromUsername(req);

  const todo = todoRepo.delete(id);
  if (!todo) {
    return res.status(404).json({ error: 'todo not found' });
  }

  return res.status(200).json(todo);
};
