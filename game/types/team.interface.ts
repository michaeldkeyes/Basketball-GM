import type { Player } from "./player.interface";
import type { TeamStats } from "./stats.interface";

export interface Team {
  name: string;
  players: Player[];
  stats: TeamStats;
}
