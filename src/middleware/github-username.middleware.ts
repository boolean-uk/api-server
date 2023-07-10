import { Request, Response, NextFunction } from 'express'

declare global {
  namespace Express {
    interface Request {
      context: {
        username: string
      }
    }
  }
}

export const GithubUser = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { username } = req.params
  req.context = {
    username: username,
  }
  // TODO check if username is part of boolean team
  next()
}
