import { Response, NextFunction } from 'express'
import { Context } from './context'

export const Username = async (
    req: Context,
    res: Response,
    next: NextFunction,
) => {
    const { username } = req.params

    if (!username) {
        return res.status(401).json({
            error: 'You must provide a github username to use this resource'
        })
    }

    req.context = { username }
    next()
}