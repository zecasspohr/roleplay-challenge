import { NextFunction, Request, Response } from 'express'
import { Controller } from '../protocols/controller'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller.handle(req, res)

    } catch (err) {
      res.status(500).json({
        error: 'Internal server error'
      })
    }
  }
}
