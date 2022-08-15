const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Highscore } = require('../../models');
const { User } = require('../../models');
const { QueryTypes } = require('sequelize');

module.exports = router;