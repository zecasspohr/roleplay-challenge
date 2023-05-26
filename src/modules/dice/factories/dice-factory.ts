import { Dice } from "../dice";

interface DiceData {
  qty: number
  sides: number
}

export class DiceFactory {
  createDices(diceInfo: string): Dice[] {
    if (!this.validateDiceType(diceInfo)) {
      throw new Error('Invalid dice type')
    }
    const { qty, sides } = this.extractData(diceInfo)
    const dices: Dice[] = [];
    for (let i = 0; i < qty; i++) {
      dices.push(new Dice(sides))
    }
    return dices
  }

  private validateDiceType(diceInfo: string): boolean {
    return !!diceInfo.match(/^\d*[d]\d+$/g)
  }

  private extractData(diceInfo: string): DiceData {
    const data = diceInfo.split('d')
    return {
      qty: +(data[0] || '1'),
      sides: +(data[1])
    }
  }
}
