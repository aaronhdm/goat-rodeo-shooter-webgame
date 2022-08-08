const sequelize = require('../config/connection');
const seedHighscore = require('./highscoreData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedHighscore();

  process.exit(0);
};

seedAll();