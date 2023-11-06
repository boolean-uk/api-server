import { Identity } from '../../service/identity';

export interface Todo extends Identity {
  title: string
  completed: boolean
}
