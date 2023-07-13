import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { Todo } from './models/todo'

export class UserTodoRepository {
  private todos: Todo[] = []
  private todoId = 1

  createTodo(dto: CreateTodoDto): Todo {
    const todo = {
      ...dto,
      id: this.todoId++,
      completed: false,
    }
    this.todos.push(todo)
    return todo
  }

  getTodos(): Todo[] {
    return this.todos
  }

  getTodoById(id: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === id)
  }

  updateTodo(id: number, dto: UpdateTodoDto): Todo | undefined {
    const todo = this.getTodoById(id)
    if (!todo) {
      return todo
    }
    Object.assign(todo, dto)

    return todo
  }

  deleteTodo(id: number): Todo | undefined {
    const index = this.todos.findIndex((todo) => todo.id === id)
    if (index === -1) {
      return undefined
    }
    const todo = this.todos.splice(index, 1)
    return todo[0]
  }
}
