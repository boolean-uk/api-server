import express from 'express';
import { controller } from './todo.controller';
import { Validate } from '../middleware/validate';
import { ValidateCreateTodoDto } from './validators/create-todo.validator';
import { ValidateUpdateTodoDto } from './validators/update-todo.validator';
import { ValidateDeleteTodo } from './validators/delete-todo.validator';
import { ValidateGetById } from '../validators/get-by-id.validator';

const router = express.Router();

router.get('/', controller.GetAll.bind(controller));
router.get('/:id',Validate(ValidateGetById), controller.GetByID.bind(controller));
router.post('/', Validate(ValidateCreateTodoDto), controller.Create.bind(controller));
router.put('/:id', Validate(ValidateUpdateTodoDto), controller.Update.bind(controller));
router.delete('/:id', Validate(ValidateDeleteTodo), controller.Delete.bind(controller));

export default router;
