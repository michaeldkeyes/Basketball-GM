export interface Stats {
  points: number;
  fieldGoalAttempts: number;
  fieldGoalsMade: number;
  threePointAttempts: number;
  threePointMakes: number;
}

export interface TeamStats extends Stats {
  pointsPerQuarter: number[];
}
