const sequelize = require('../config/connection');
const seedHighscore = require('./highscoreData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedHighscore();

  process.exit(0);
};

seedAll();