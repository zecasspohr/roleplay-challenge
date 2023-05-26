import { Player } from "../player/player"
import { RoundPlayService } from "./round-play.service"

const makeSut = () => {
  return new RoundPlayService()
}

describe('RoundPlayService', () => {
  it('Should call player roll dice', () => {
    const sut = makeSut()
    const rollDiceSpy = jest.spyOn(Player.prototype, 'rollDices')
    sut.play([{
      name: 'Player 1',
      dicesInfo: '3d20'
    }, {
      name: 'Player 2',
      dicesInfo: 'd18'
    }])
    expect(rollDiceSpy).toHaveBeenCalledTimes(2)
  })

  it('Should return correct results', () => {
    const sut = makeSut()
    const playerDto = {
      name: 'Player 1',
      dicesInfo: '3d20'
    }
    jest.spyOn(Player.prototype, 'rollDices').mockReturnValueOnce([3, 5, 15])
    const result = sut.play([playerDto])
    const expectedResult = [{
      name: 'Player 1',
      results: [3, 5, 15],
      total: 23
    }]
    expect(result).toMatchObject(expectedResult)
  })
})
