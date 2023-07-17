import { Request } from 'express';

export interface Context extends Request {
  context?: {
    username: string,
  }
}
