import { UserTodoRepository } from './user-todo.repository';
import { Repository } from '../service/repository';
import { Controller } from '../service/controller';

const repo = new Repository<UserTodoRepository>(UserTodoRepository);

export const controller = new Controller(repo);
