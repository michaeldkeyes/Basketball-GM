import type { Attributes } from "./attributes.interface";
import type { Position } from "./positions.enum";
import type { Stats } from "./stats.interface";

export interface Player {
  name: string;
  position: Position;
  attributes: Attributes;
  stats: Stats;
}
