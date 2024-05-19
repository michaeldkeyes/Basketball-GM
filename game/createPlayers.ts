import positionAttributes from "./positionAttributes";
import type { Player } from "./types/player.interface";
import { getRandomNumberBetween } from "./utils/random";

export function createPlayers(): Player[] {
  const players: Player[] = [];

  positionAttributes.forEach((position) => {
    const player: Player = {
      name: "player" + Math.floor(Math.random() * 1000),
      position: position.position,
      attributes: {
        twoPointShooting: getRandomNumberBetween(
          position.twoPointShootingMin,
          position.twoPointShootingMax,
        ),
        threePointShooting: getRandomNumberBetween(
          position.threePointShootingMin,
          position.threePointShootingMax,
        ),
        twoPointTendency: 0,
        threePointTendency: getRandomNumberBetween(
          position.threePointTendencyMin,
          position.threePointTendencyMax,
        ),
        freeThrowShooting: getRandomNumberBetween(
          position.freeThrowShootingMin,
          position.freeThrowShootingMax,
        ),
        scoring: 0,
      },
      stats: {
        points: 0,
        fieldGoalAttempts: 0,
        fieldGoalsMade: 0,
        threePointAttempts: 0,
        threePointMakes: 0,
        freeThrowAttempts: 0,
        freeThrowMakes: 0,
      },
    };

    player.attributes.twoPointTendency =
      1000 - player.attributes.threePointTendency;

    // give player a scoring attribute based on their overall shooting percentage and tendency
    player.attributes.scoring = Math.round(
      (player.attributes.twoPointShooting / 10) *
        (player.attributes.twoPointTendency / 1000) +
        (player.attributes.threePointShooting / 10) *
          (player.attributes.threePointTendency / 1000),
    );

    players.push(player);
  });

  return players;
}
