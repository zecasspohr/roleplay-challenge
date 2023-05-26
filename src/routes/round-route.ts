import { Router } from "express"
import { RoundPlayController } from "../modules/round/round-play.controller"
import { RoundPlayService } from "../modules/round/round-play.service"
import { adaptRoute } from "./adapt-express-route"

export default (router: Router): void => {
  router.use('/round', router)
  router.post('/play', adaptRoute(makeRoundPlayController()))
}

const makeRoundPlayController = () => {
  const roundPlayService = new RoundPlayService()
  return new RoundPlayController(roundPlayService)
}
