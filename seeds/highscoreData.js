const { Highscore } = require('../models');

const highscoredata = [
  {
    score: 300,
    user_id: 1
  },
  {
    score: 400,
    user_id: 2
  }
];

const seedHighscores = () => Highscore.bulkCreate(highscoredata);

module.exports = seedHighscores;