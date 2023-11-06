import express from 'express';
import {
  CreateTodo,
  DeleteTodo,
  GetAllTodos,
  GetTodoByID,
  UpdateTodo,
} from './todo.controller';
import { Validate } from '../middleware/validate';
import { ValidateCreateTodoDto } from './validators/create-todo.validator';
import { ValidateUpdateTodoDto } from './validators/update-todo.validator';
import { ValidateDeleteTodo } from './validators/delete-todo.validator';
import { ValidateGetById } from '../validators/get-by-id.validator';

const router = express.Router();

router.get('/', GetAllTodos);
router.get('/:id',Validate(ValidateGetById), GetTodoByID);
router.post('/', Validate(ValidateCreateTodoDto), CreateTodo);
router.put('/:id', Validate(ValidateUpdateTodoDto), UpdateTodo);
router.delete('/:id', Validate(ValidateDeleteTodo), DeleteTodo);

export default router;
