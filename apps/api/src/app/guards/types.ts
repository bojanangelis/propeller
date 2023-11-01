import { User } from '@prisma/client'
import { Request, Response } from 'express'

export interface IUserContext {
  response: Response
  request: Request
  user: User
}

export type UserJwtPayload = false | { id: string }
