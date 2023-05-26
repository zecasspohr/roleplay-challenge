import { Dice } from "../../dice/dice";
import { DiceFactory } from "../../dice/factories/dice-factory";
import { PlayerDto } from "../dtos/player-dto";
import { Player } from "../player";

export default class PlayerMapper {
  static mapTo(player: PlayerDto): Player {
    const diceFactory = new DiceFactory()
    return new Player(
      player.name,
      diceFactory.createDices(player.dicesInfo)
    )
  }
}
