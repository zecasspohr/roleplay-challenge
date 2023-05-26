import { Express, Router } from 'express'
import setupRoundRoutes from '../routes/round-route'

export default (app: Express): void => {
  app.get('/', (req, res) => res.status(200).json({ message: 'Hello' }))
  const router = Router()
  app.use('/api', router)
  setupRoundRoutes(router)
}
