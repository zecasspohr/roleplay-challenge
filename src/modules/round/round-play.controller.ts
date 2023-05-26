import { Request, Response } from "express";
import { RoundPlayUsecase } from "./usecases/round-play-usecase";
import { Controller } from "../../protocols/controller";

export class RoundPlayController implements Controller {
  constructor(
    private roundPlayUsecase: RoundPlayUsecase
  ) { }

  async handle(req: Request, res: Response) {
    const players = req.body?.players
    if (!players) {
      res.status(400).json({ message: 'Players não informado' })
      return
    }
    const result = this.roundPlayUsecase.play(players)
    res.status(200).json(result)
  }
}
