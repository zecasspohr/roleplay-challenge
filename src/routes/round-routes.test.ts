import request from 'supertest'
import app from '../config/app'
describe('Round Routes', () => {

  describe('POST /round/play', () => {
    test('Should return 400 when not send player info', async () => {
      await request(app)
        .post('/api/round/play')
        .send().expect(400)
    })

    test('Should return 200', async () => {
      await request(app)
        .post('/api/round/play')
        .send({
          "players": [{
            "name": "Player 1",
            "dicesInfo": '3d20'
          }]
        }).expect(200)
    })
  })
})
