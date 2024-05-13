import type { Position } from "./positions.enum";
import positionAttributes from "./positionAttributes";

function getRandomNumberBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

interface Stats {
  points: number;
  fieldGoalAttempts: number;
  fieldGoalsMade: number;
  threePointAttempts: number;
  threePointMakes: number;
}

interface Attributes {
  twoPointShootingPercentage: number;
  threePointShootingPercentage: number;
  twoPointTendency: number;
  threePointTendency: number;
}

interface TeamStats extends Stats {
  pointsPerQuarter: number[];
}

interface Player {
  name: string;
  position: Position;
  attributes: Attributes;
  stats: Stats;
}

export interface Team {
  name: string;
  players: Player[];
  stats: TeamStats;
}

export interface GameResults {
  homeTeam: Team;
  awayTeam: Team;
}

function createPlayers(): Player[] {
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

    players.push(player);
  });

  return players;
}

export function simulateGame(): GameResults {
  const homeTeam: Team = {
    name: "Earthquakes",
    players: createPlayers(),
    stats: {
      points: 0,
      fieldGoalAttempts: 0,
      fieldGoalsMade: 0,
      threePointAttempts: 0,
      threePointMakes: 0,
      pointsPerQuarter: [],
    },
  };

  const awayTeam: Team = {
    name: "Liberty",
    players: createPlayers(),
    stats: {
      points: 0,
      fieldGoalAttempts: 0,
      fieldGoalsMade: 0,
      threePointAttempts: 0,
      threePointMakes: 0,
      pointsPerQuarter: [],
    },
  };

  let quarter = 1;
  let gameClock = 720;

  let offense = homeTeam;

  while (quarter <= 4 || homeTeam.stats.points === awayTeam.stats.points) {
    homeTeam.stats.pointsPerQuarter.push(0);
    awayTeam.stats.pointsPerQuarter.push(0);

    while (gameClock > 0) {
      const timeOfPossession = getRandomNumberBetween(4, 24);
      gameClock -= timeOfPossession;

      simPossession(offense, quarter);
      offense = offense === homeTeam ? awayTeam : homeTeam;
    }

    quarter++;
    gameClock = quarter <= 4 ? 720 : 300;
  }

  return { homeTeam, awayTeam };
}

function simPossession(offense: Team, quarter: number): void {
  const playerIndex = Math.floor(Math.random() * 5);
  const player = offense.players[playerIndex];

  player.stats.fieldGoalAttempts++;
  offense.stats.fieldGoalAttempts++;

  if (getRandomNumberBetween(0, 1000) < player.attributes.twoPointTendency) {
    if (
      getRandomNumberBetween(0, 1000) <
      player.attributes.twoPointShootingPercentage
    ) {
      offense.stats.points += 2;
      player.stats.points += 2;
      player.stats.fieldGoalsMade++;
      offense.stats.fieldGoalsMade++;

      offense.stats.pointsPerQuarter[quarter - 1] += 2;
    }
  } else {
    player.stats.threePointAttempts++;
    offense.stats.threePointAttempts++;

    if (
      getRandomNumberBetween(0, 1000) <
      player.attributes.threePointShootingPercentage
    ) {
      offense.stats.points += 3;
      player.stats.points += 3;
      player.stats.fieldGoalsMade++;
      offense.stats.fieldGoalsMade++;
      player.stats.threePointMakes++;
      offense.stats.threePointMakes++;

      offense.stats.pointsPerQuarter[quarter - 1] += 3;
    }
  }
}
