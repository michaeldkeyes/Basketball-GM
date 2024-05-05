// write a function that returns a random number between the min and max values passed in
function getRandomNumberBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

interface Stats {
  points: number;
  fieldGoalAttempts: number;
  fieldGoalsMade: number;
}

// write a player interface with the following properties
// name: string
// shootingPercentage: number
// points: number
interface Player {
  name: string;
  shootingPercentage: number;
  stats: Stats;
}

// write a team interface with the following properties
// players: Player[]
// score: number
export interface Team {
  name: string;
  players: Player[];
  stats: Stats;
}

// write a game results interface with the following properties
// teams: Team[]
// winner: string
export interface GameResults {
  team1: Team;
  team2: Team;
}

export function simulateGame(): GameResults {
  // create two teams with 5 players each
  // each team has a total score of 0
  // each player has a shooting percentage between 0 and 100
  // simulate 100 shots for each team
  // if random number is less than player's shooting percentage, they score
  // add 2 to the team's score
  // return the team with the most points

  const team1: Team = {
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
    },
  };

  const team2: Team = {
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
    },
  };

  let quarter = 1;
  let gameClock = 720;

  let offense = team1;

  // simulate the game clock
  while (quarter <= 4) {
    while (gameClock > 0) {
      const timeOfPossession = getRandomNumberBetween(4, 24);
      gameClock -= timeOfPossession;

      // simulate a shot
      const playerIndex = Math.floor(Math.random() * 5);
      const player = offense.players[playerIndex];

      player.stats.fieldGoalAttempts++;
      offense.stats.fieldGoalAttempts++;

      if (getRandomNumberBetween(0, 100) < player.shootingPercentage) {
        offense.stats.points += 2;
        player.stats.points += 2;
        player.stats.fieldGoalsMade++;
        offense.stats.fieldGoalsMade++;
      }

      offense = offense === team1 ? team2 : team1;
    }

    gameClock = 720;
    quarter++;
  }

  // return a new GameResults object with the two teams
  return { team1, team2 };
}
