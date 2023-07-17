import { UserTodoRepository } from './user-todo.repository';

export class TodoRepository {
  private todos: Record<string, UserTodoRepository> = {};

  getUserRepository(username: string): UserTodoRepository | undefined {
    return this.todos[username];
  }

  getOrCreateUserRepository(username: string): UserTodoRepository {
    const existingRepo = this.getUserRepository(username);
    if (existingRepo) {
      return existingRepo;
    }
    const newRepo = new UserTodoRepository();
    this.todos[username] = newRepo;

    return newRepo;
  }
}
