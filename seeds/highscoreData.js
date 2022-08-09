const { Highscore } = require('../models');

const highscoredata = [
  {
    score: 100,
    user_id: 1
  },
  {
    score: 200,
    user_id: 2
  },  {
    score: 300,
    user_id: 2
  },  {
    score: 400,
    user_id: 2
  },  {
    score: 500,
    user_id: 1
  },  {
    score: 600,
    user_id: 1
  },
];

const seedHighscores = () => Highscore.bulkCreate(highscoredata);

module.exports = seedHighscores;