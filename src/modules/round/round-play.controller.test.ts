import { NextFunction, Request, Response } from "express"
import {
  createRequest, createResponse, MockRequest, MockResponse
} from 'node-mocks-http';

import { RoundPlayService } from "./round-play.service"
import { RoundPlayUsecase } from "./usecases/round-play-usecase"
import { RoundPlayController } from "./round-play.controller";


const makeFakeRequestData = () => {
  const fakeRequest = {
    players: [{
      name: 'Player 1',
      dicesInfo: '3d20'
    }]
  }

  return fakeRequest
}

const makeRoundPlayService = () => {
  return new RoundPlayService()
}
interface SutTypes {
  sut: RoundPlayController
  roundPlayService: RoundPlayUsecase
}
const makeSut = (): SutTypes => {
  const roundPlayService = makeRoundPlayService()
  return {
    sut: new RoundPlayController(roundPlayService),
    roundPlayService
  }
}
describe('RoundPlayController', () => {
  let request: MockRequest<Request>;
  let response: MockResponse<Response>;
  beforeEach(() => {
    response = createResponse();
  });

  it('Should execute play with correct values', () => {
    const { sut, roundPlayService } = makeSut()
    const fakeRequest = makeFakeRequestData()
    request = createRequest({
      method: 'POST',
      url: '/',
      body: fakeRequest
    });

    const playSpy = jest.spyOn(roundPlayService, 'play')
    sut.handle(request, response)
    expect(playSpy).toHaveBeenCalledWith(fakeRequest.players)
  })

  it('Should return 400 if player is not passed', () => {
    const { sut } = makeSut()
    request = createRequest({
      method: 'POST',
      url: '/',
    });

    sut.handle(request, response)
    expect(response.statusCode).toBe(400)
  })
})
