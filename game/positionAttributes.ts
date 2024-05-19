import { Position } from "./types/positions.enum";

export default [
  {
    position: Position.PG,
    twoPointShootingMin: 350,
    twoPointShootingMax: 550, // 24.75
    threePointShootingMin: 300,
    threePointShootingMax: 450, //25.3125
    threePointTendencyMin: 300,
    threePointTendencyMax: 600,
    freeThrowShootingMin: 700,
    freeThrowShootingMax: 900,
    // average scoring: 50.0625
  },
  // SG
  {
    position: Position.SG,
    twoPointShootingMin: 350,
    twoPointShootingMax: 570, //27.6
    threePointShootingMin: 300,
    threePointShootingMax: 450, //22.5
    threePointTendencyMin: 200,
    threePointTendencyMax: 600,
    freeThrowShootingMin: 650,
    freeThrowShootingMax: 900,
    // average scoring: 50.1
  },
  // SF
  {
    position: Position.SF,
    twoPointShootingMin: 400,
    twoPointShootingMax: 600, // 32.5
    threePointShootingMin: 270,
    threePointShootingMax: 400, //17.58
    threePointTendencyMin: 200,
    threePointTendencyMax: 500,
    freeThrowShootingMin: 600,
    freeThrowShootingMax: 850,
    // average scoring: 50.08
  },
  // PF
  {
    position: Position.PF,
    twoPointShootingMin: 352,
    twoPointShootingMax: 650, // 47.59
    threePointShootingMin: 250,
    threePointShootingMax: 370, //2.32
    threePointTendencyMin: 0,
    threePointTendencyMax: 100,
    freeThrowShootingMin: 600,
    freeThrowShootingMax: 800,
    // average scoring: 49.91
  },
  // C
  {
    position: Position.C,
    twoPointShootingMin: 352,
    twoPointShootingMax: 650,
    threePointShootingMin: 100,
    threePointShootingMax: 250, //.12
    threePointTendencyMin: 0,
    threePointTendencyMax: 10,
    freeThrowShootingMin: 500,
    freeThrowShootingMax: 750,
    // average scoring: 49.9
  },
];
