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
        twoPointShootingPercentage: getRandomNumberBetween(
          position.twoPointShootingPercentageMin,
          position.twoPointShootingPercentageMax,
        ),
        threePointShootingPercentage: getRandomNumberBetween(
          position.threePointShootingPercentageMin,
          position.threePointShootingPercentageMax,
        ),
        twoPointTendency: 0,
        threePointTendency: getRandomNumberBetween(
          position.threePointTendencyMin,
          position.threePointTendencyMax,
        ),
        scoring: 0,
      },
      stats: {
        points: 0,
        fieldGoalAttempts: 0,
        fieldGoalsMade: 0,
        threePointAttempts: 0,
        threePointMakes: 0,
      },
    };

    player.attributes.twoPointTendency =
      1000 - player.attributes.threePointTendency;

    // give player a scoring attribute based on their overall shooting percentage and tendency
    player.attributes.scoring = Math.round(
      (player.attributes.twoPointShootingPercentage / 10) *
        (player.attributes.twoPointTendency / 1000) +
        (player.attributes.threePointShootingPercentage / 10) *
          (player.attributes.threePointTendency / 1000),
    );

    players.push(player);
  });

  return players;
}
