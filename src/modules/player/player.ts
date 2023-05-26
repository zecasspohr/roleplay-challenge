import { Dice } from "../dice/dice";

export class Player {
  constructor(
    readonly name: string,
    readonly dices: Dice[]
  ) { }

  rollDices(): number[] {
    return this.dices.map(dice => dice.roll())
  }
}
