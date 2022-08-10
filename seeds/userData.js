const { User } = require('../models');

const userdata = [
  {
    username: "Player One",
    password: "yeppers",
    email: "yep@yep.com",
    password: "password12345"
  },
  {
    username: "Player Two",
    password: "surekay",
    email: "sure@sure.com",
    password: "password12345"
  },
];

const seedUsers = () => User.bulkCreate(userdata,{
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;
