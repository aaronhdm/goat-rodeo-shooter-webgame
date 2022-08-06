const { Highscore } = require('../models');

const highscoredata = [
  {
    name: 'Waddles',
    score: 300,
  },
  {
    name: 'Gonkers',
    score: 200,
  },
  {
    name: 'Soos',
    score: 100,
  },
];

const seedHighscores = () => Highscore.bulkCreate(highscoredata);

module.exports = seedHighscores;