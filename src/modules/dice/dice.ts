export class Dice {
  constructor(
    readonly sides: number
  ) { }

  roll(): number {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}
