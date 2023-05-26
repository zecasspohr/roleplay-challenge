import { PlayerDto } from "../../player/dtos/player-dto";
import { PlayerResultDto } from "../../player/dtos/player-result-dto";

export interface RoundPlayUsecase {
  play(players: PlayerDto[]): PlayerResultDto[]
}
