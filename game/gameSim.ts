function getRandomNumberBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

interface Stats {
  points: number;
  fieldGoalAttempts: number;
  fieldGoalsMade: number;
}

interface TeamStats extends Stats {
  pointsPerQuarter: number[];
}

interface Player {
  name: string;
  shootingPercentage: number;
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

export function simulateGame(): GameResults {
  const homeTeam: Team = {
    name: "Earthquakes",
    players: [
      {
        name: "player1",
        shootingPercentage: 50,
        stats: {
          points: 0,
          fieldGoalAttempts: 0,
          fieldGoalsMade: 0,
        },
      },
      {
        name: "player2",
        shootingPercentage: 50,
        stats: {
          points: 0,
          fieldGoalAttempts: 0,
          fieldGoalsMade: 0,
        },
      },
      {
        name: "player3",
        shootingPercentage: 50,
        stats: {
          points: 0,
          fieldGoalAttempts: 0,
          fieldGoalsMade: 0,
        },
      },
      {
        name: "player4",
        shootingPercentage: 50,
        stats: {
          points: 0,
          fieldGoalAttempts: 0,
          fieldGoalsMade: 0,
        },
      },
      {
        name: "player5",
        shootingPercentage: 50,
        stats: {
          points: 0,
          fieldGoalAttempts: 0,
          fieldGoalsMade: 0,
        },
      },
    ],
    stats: {
      points: 0,
      fieldGoalAttempts: 0,
      fieldGoalsMade: 0,
      pointsPerQuarter: [],
    },
  };

  const awayTeam: Team = {
    name: "Liberty",
    players: [
      {
        name: "player6",
        shootingPercentage: 50,
        stats: {
          points: 0,
          fieldGoalAttempts: 0,
          fieldGoalsMade: 0,
        },
      },
      {
        name: "player7",
        shootingPercentage: 50,
        stats: {
          points: 0,
          fieldGoalAttempts: 0,
          fieldGoalsMade: 0,
        },
      },
      {
        name: "player8",
        shootingPercentage: 50,
        stats: {
          points: 0,
          fieldGoalAttempts: 0,
          fieldGoalsMade: 0,
        },
      },
      {
        name: "player9",
        shootingPercentage: 50,
        stats: {
          points: 0,
          fieldGoalAttempts: 0,
          fieldGoalsMade: 0,
        },
      },
      {
        name: "player10",
        shootingPercentage: 50,
        stats: {
          points: 0,
          fieldGoalAttempts: 0,
          fieldGoalsMade: 0,
        },
      },
    ],
    stats: {
      points: 0,
      fieldGoalAttempts: 0,
      fieldGoalsMade: 0,
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

  if (getRandomNumberBetween(0, 100) < player.shootingPercentage) {
    offense.stats.points += 2;
    player.stats.points += 2;
    player.stats.fieldGoalsMade++;
    offense.stats.fieldGoalsMade++;

    offense.stats.pointsPerQuarter[quarter - 1] += 2;
  }
}
