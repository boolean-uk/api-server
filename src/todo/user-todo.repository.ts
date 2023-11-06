import { UserRepository } from '../service/user-repository';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './models/todo';

export class UserTodoRepository extends UserRepository<Todo, CreateTodoDto, UpdateTodoDto> {
  create(dto: CreateTodoDto): Todo {
    const todo = {
      ...dto,
      id: this.id++,
      completed: false,
    };
    this.data.push(todo);
    return todo;
  }
}
