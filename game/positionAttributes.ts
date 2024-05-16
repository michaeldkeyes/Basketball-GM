import { Position } from "./types/positions.enum";

export default [
  {
    position: Position.PG,
    twoPointShootingPercentageMin: 350,
    twoPointShootingPercentageMax: 550, // 24.75
    threePointShootingPercentageMin: 300,
    threePointShootingPercentageMax: 450, //25.3125
    threePointTendencyMin: 300,
    threePointTendencyMax: 600,
    // average scoring: 50.0625
  },
  // SG
  {
    position: Position.SG,
    twoPointShootingPercentageMin: 350,
    twoPointShootingPercentageMax: 570, //27.6
    threePointShootingPercentageMin: 300,
    threePointShootingPercentageMax: 450, //22.5
    threePointTendencyMin: 200,
    threePointTendencyMax: 600,
    // average scoring: 50.1
  },
  // SF
  {
    position: Position.SF,
    twoPointShootingPercentageMin: 400,
    twoPointShootingPercentageMax: 600, // 32.5
    threePointShootingPercentageMin: 270,
    threePointShootingPercentageMax: 400, //17.58
    threePointTendencyMin: 200,
    threePointTendencyMax: 500,
    // average scoring: 50.08
  },
  // PF
  {
    position: Position.PF,
    twoPointShootingPercentageMin: 352,
    twoPointShootingPercentageMax: 650, // 47.59
    threePointShootingPercentageMin: 250,
    threePointShootingPercentageMax: 370, //2.32
    threePointTendencyMin: 0,
    threePointTendencyMax: 100,
    // average scoring: 49.91
  },
  // C
  {
    position: Position.C,
    twoPointShootingPercentageMin: 352,
    twoPointShootingPercentageMax: 650,
    threePointShootingPercentageMin: 100,
    threePointShootingPercentageMax: 250, //.12
    threePointTendencyMin: 0,
    threePointTendencyMax: 10,
    // average scoring: 49.9
  },
];
