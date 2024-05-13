import { Position } from "./positions.enum";

export default [
  {
    position: Position.PG,
    twoPointShootingPercentageMin: 350,
    twoPointShootingPercentageMax: 550,
    threePointShootingPercentageMin: 250,
    threePointShootingPercentageMax: 450,
    threePointTendencyMin: 200,
    threePointTendencyMax: 600,
  },
  // SG
  {
    position: Position.SG,
    twoPointShootingPercentageMin: 350,
    twoPointShootingPercentageMax: 550,
    threePointShootingPercentageMin: 250,
    threePointShootingPercentageMax: 450,
    threePointTendencyMin: 300,
    threePointTendencyMax: 600,
  },
  // SF
  {
    position: Position.SF,
    twoPointShootingPercentageMin: 400,
    twoPointShootingPercentageMax: 600,
    threePointShootingPercentageMin: 250,
    threePointShootingPercentageMax: 400,
    threePointTendencyMin: 200,
    threePointTendencyMax: 500,
  },
  // PF
  {
    position: Position.PF,
    twoPointShootingPercentageMin: 400,
    twoPointShootingPercentageMax: 650,
    threePointShootingPercentageMin: 250,
    threePointShootingPercentageMax: 350,
    threePointTendencyMin: 0,
    threePointTendencyMax: 100,
  },
  // C
  {
    position: Position.C,
    twoPointShootingPercentageMin: 400,
    twoPointShootingPercentageMax: 650,
    threePointShootingPercentageMin: 100,
    threePointShootingPercentageMax: 250,
    threePointTendencyMin: 0,
    threePointTendencyMax: 10,
  },
];
