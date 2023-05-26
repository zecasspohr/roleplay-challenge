import { Dice } from "../dice/dice"
import { Player } from "./player"
jest.mock('../dice/dice')

const makeDice = (sides: number) => {
  return new Dice(sides)
}

describe('Player', () => {
  test('Should roll the same qty of dices', () => {
    const rollSpy = jest.spyOn(Dice.prototype, 'roll')
    const dices = [makeDice(8), makeDice(12), makeDice(14)]
    const player = new Player('Zeca', dices)
    player.rollDices()

    expect(rollSpy).toHaveBeenCalledTimes(3)
  })

  test('Should roll every dice only once', () => {
    const dice1 = makeDice(8)
    const dice1Spy = jest.spyOn(dice1, 'roll')
    const dice2 = makeDice(12)
    const dice2Spy = jest.spyOn(dice2, 'roll')
    const dice3 = makeDice(14)
    const dice3Spy = jest.spyOn(dice3, 'roll')

    const dices = [dice1, dice2, dice3]
    const player = new Player('Zeca', dices)
    player.rollDices()

    expect(dice1Spy).toHaveBeenCalledTimes(1)
    expect(dice2Spy).toHaveBeenCalledTimes(1)
    expect(dice3Spy).toHaveBeenCalledTimes(1)
  })

})
