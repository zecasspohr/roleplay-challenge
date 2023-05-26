import { Dice } from "./dice"

describe('Dice', () => {
  let mathRandomSpy: jest.SpyInstance
  beforeEach(() => {
    mathRandomSpy = jest.spyOn(global.Math, 'random')
  })

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })

  it('Should call math random', () => {
    const dice = new Dice(4)
    dice.roll()
    expect(mathRandomSpy).toHaveBeenCalled()
  })

  it('Should return the maximum value', () => {
    mathRandomSpy.mockReturnValueOnce(0.999999)
    const dice = new Dice(4)
    const value = dice.roll()
    expect(value).toBe(4)
  })

  it('Should return the minimum value', () => {
    mathRandomSpy.mockReturnValueOnce(0.111111)
    const dice = new Dice(4)
    const value = dice.roll()
    expect(value).toBe(1)
  })
})
