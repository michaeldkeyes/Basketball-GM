// write a function that returns a random number between the min and max values passed in
function getRandomNumberBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// write a player interface with the following properties
// name: string
// shootingPercentage: number
// points: number
export interface Player {
  name: string;
  shootingPercentage: number;
  points: number;
  fieldGoalAttempts: number;
  fieldGoalsMade: number;
}

// write a team interface with the following properties
// players: Player[]
// score: number
export interface Team {
  name: string;
  players: Player[];
  score: number;
  fieldGoalAttempts: number;
  fieldGoalsMade: number;
}

// write a game results interface with the following properties
// teams: Team[]
// winner: string
export interface GameResults {
  team1: Team;
  team2: Team;
  winner: string;
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
        points: 0,
        fieldGoalAttempts: 0,
        fieldGoalsMade: 0,
      },
      {
        name: "player2",
        shootingPercentage: 50,
        points: 0,
        fieldGoalAttempts: 0,
        fieldGoalsMade: 0,
      },
      {
        name: "player3",
        shootingPercentage: 50,
        points: 0,
        fieldGoalAttempts: 0,
        fieldGoalsMade: 0,
      },
      {
        name: "player4",
        shootingPercentage: 50,
        points: 0,
        fieldGoalAttempts: 0,
        fieldGoalsMade: 0,
      },
      {
        name: "player5",
        shootingPercentage: 50,
        points: 0,
        fieldGoalAttempts: 0,
        fieldGoalsMade: 0,
      },
    ],
    score: 0,
    fieldGoalAttempts: 0,
    fieldGoalsMade: 0,
  };

  const team2: Team = {
    name: "Liberty",
    players: [
      {
        name: "player6",
        shootingPercentage: 50,
        points: 0,
        fieldGoalAttempts: 0,
        fieldGoalsMade: 0,
      },
      {
        name: "player7",
        shootingPercentage: 50,
        points: 0,
        fieldGoalAttempts: 0,
        fieldGoalsMade: 0,
      },
      {
        name: "player8",
        shootingPercentage: 50,
        points: 0,
        fieldGoalAttempts: 0,
        fieldGoalsMade: 0,
      },
      {
        name: "player9",
        shootingPercentage: 50,
        points: 0,
        fieldGoalAttempts: 0,
        fieldGoalsMade: 0,
      },
      {
        name: "player10",
        shootingPercentage: 50,
        points: 0,
        fieldGoalAttempts: 0,
        fieldGoalsMade: 0,
      },
    ],
    score: 0,
    fieldGoalAttempts: 0,
    fieldGoalsMade: 0,
  };

  // simulate 100 shots
  // if i is odd then team1 shoots
  // if i is even then team2 shoots
  // choose a random player from the team to shoot
  // if random number is less than player's shooting percentage, they score
  for (let i = 0; i < 200; i++) {
    const team = i % 2 === 0 ? team2 : team1;

    const playerIndex = Math.floor(Math.random() * 5);
    const player = team.players[playerIndex];

    player.fieldGoalAttempts++;
    team.fieldGoalAttempts++;

    if (getRandomNumberBetween(0, 100) < player.shootingPercentage) {
      team.score += 2;
      player.points += 2;
      player.fieldGoalsMade++;
      team.fieldGoalsMade++;
    }
  }

  // return a new GameResults object with the two teams and the winner
  const winner = team1.score > team2.score ? "team1" : "team2";
  return { team1, team2, winner };
}
