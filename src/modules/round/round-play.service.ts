import { PlayerDto } from "../player/dtos/player-dto";
import { PlayerResultDto } from "../player/dtos/player-result-dto";
import PlayerMapper from "../player/mappers/player-mapper";
import { RoundPlayUsecase } from "./usecases/round-play-usecase";

export class RoundPlayService implements RoundPlayUsecase {
  play(playersDto: PlayerDto[]): PlayerResultDto[] {
    const players = playersDto.map(PlayerMapper.mapTo)
    return players.map(player => {
      const rolledValues = player.rollDices()
      return {
        name: player.name,
        results: rolledValues,
        total: rolledValues.reduce((a, b) => a + b, 0)
      }
    })
  }

}
