const { User } = require('../models');

const userdata = [
  {
    username: "Dustin",
    password: "okiesillydokieoh",
    email: "yep@yep.com",
    kills: 500,
    deaths: 1,
  },
  {
    username: "Player Two",
    password: "sure",
    email: "sure@sure.com",
    kills: 399,
    deaths: 2,
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
