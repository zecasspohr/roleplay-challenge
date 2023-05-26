import { Dice } from "../dice"
import { DiceFactory } from "./dice-factory"
jest.mock('../dice')

const makeSut = (): DiceFactory => {
  return new DiceFactory()
}
describe('DiceFactory', () => {
  const validPatern_1 = '3d20'
  const validPatern_2 = 'd20'
  const invalidPatern = 'e20'

  it('Should throw if passes invalid pattern', () => {
    const sut = makeSut()
    expect(() => sut.createDices(invalidPatern)).toThrow()
  })

  it('Should create dices when pass valid patterns', () => {
    const sut = makeSut()

    const dices = sut.createDices(validPatern_1)
    const dices_2 = sut.createDices(validPatern_2)

    expect(dices.length).toBe(3)
    expect(dices_2.length).toBe(1)
    expect(Dice).toHaveBeenCalledTimes(4)
  })
})
