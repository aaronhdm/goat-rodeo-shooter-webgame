const { User } = require('../models');

const userdata = [
  {
    username: "Player One",
    password: "yeppers",
    email: "yep@yep.com",
  },
  {
    username: "Player Two",
    password: "surekay",
    email: "sure@sure.com",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
