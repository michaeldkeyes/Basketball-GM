import { createPlayers } from "./createPlayers";
import type { Player } from "./types/player.interface";
import type { Team } from "./types/team.interface";
import { getRandomNumber, getRandomNumberBetween } from "./utils/random";

export interface GameResults {
  homeTeam: Team;
  awayTeam: Team;
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
      freeThrowAttempts: 0,
      freeThrowMakes: 0,
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
      freeThrowAttempts: 0,
      freeThrowMakes: 0,
      pointsPerQuarter: [],
    },
  };

  // sort players by scoring attribute
  homeTeam.players.sort((a, b) => b.attributes.scoring - a.attributes.scoring);
  awayTeam.players.sort((a, b) => b.attributes.scoring - a.attributes.scoring);

  let usageModifier = 0.28;

  homeTeam.players.map((player) => {
    player.attributes.scoring = Math.round(
      player.attributes.scoring * usageModifier,
    );
    usageModifier -= 0.04;
  });

  usageModifier = 0.28;

  awayTeam.players.map((player) => {
    player.attributes.scoring = Math.round(
      player.attributes.scoring * usageModifier,
    );
    usageModifier -= 0.04;
  });

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
  const players = offense.players;

  const player = whoShoots(players);

  player.stats.fieldGoalAttempts++;
  offense.stats.fieldGoalAttempts++;

  if (getRandomNumberBetween(0, 1000) < player.attributes.twoPointTendency) {
    const isFouled = checkForFoul(true);
    if (getRandomNumberBetween(0, 1000) <= player.attributes.twoPointShooting) {
      offense.stats.points += 2;
      player.stats.points += 2;
      player.stats.fieldGoalsMade++;
      offense.stats.fieldGoalsMade++;

      offense.stats.pointsPerQuarter[quarter - 1] += 2;

      if (isFouled) {
        shootFreeThrows(player, offense, 1);
      }
    } else if (isFouled) {
      // if player is fouled, the shot attempt doesn't count
      player.stats.fieldGoalAttempts--;
      offense.stats.fieldGoalAttempts--;
      shootFreeThrows(player, offense, 2);
    }
  } else {
    const isFouled = checkForFoul(false);

    player.stats.threePointAttempts++;
    offense.stats.threePointAttempts++;

    if (
      getRandomNumberBetween(0, 1000) <= player.attributes.threePointShooting
    ) {
      offense.stats.points += 3;
      player.stats.points += 3;
      player.stats.fieldGoalsMade++;
      offense.stats.fieldGoalsMade++;
      player.stats.threePointMakes++;
      offense.stats.threePointMakes++;

      offense.stats.pointsPerQuarter[quarter - 1] += 3;

      if (isFouled) {
        shootFreeThrows(player, offense, 1);
      }
    } else if (isFouled) {
      player.stats.threePointAttempts--;
      player.stats.fieldGoalAttempts--;
      offense.stats.threePointAttempts--;
      offense.stats.fieldGoalAttempts--;
      shootFreeThrows(player, offense, 3);
    }
  }
}

function checkForFoul(isTwo: boolean): boolean {
  if (isTwo) {
    return getRandomNumberBetween(0, 1000) < 350;
  }
  return getRandomNumberBetween(0, 1000) < 50;
}

function shootFreeThrows(player: Player, offense: Team, amount: number): void {
  for (let i = 0; i < amount; i++) {
    player.stats.freeThrowAttempts++;
    offense.stats.freeThrowAttempts++;
    if (getRandomNumberBetween(0, 1000) < player.attributes.freeThrowShooting) {
      player.stats.freeThrowMakes++;
      offense.stats.freeThrowMakes++;
    }
  }
}

function whoShoots(players: Player[]): Player {
  let totalScoring = 0;
  for (let i = 0; i < players.length; i++) {
    totalScoring += players[i].attributes.scoring;
  }

  const rng = getRandomNumber(totalScoring);

  let player = players[0];

  let min = 0;
  let max = 0;
  for (let i = 0; i < players.length; i++) {
    min = max;
    max = players[i].attributes.scoring + min;
    if (rng < max && rng >= min) {
      player = players[i];
    }
  }

  return player;
}
