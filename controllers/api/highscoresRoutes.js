
const router = require('express').Router();
// const sequelize = require('./config/connection');
const { Highscore } = require('../../models');

const scoreData = [];

// --------Get Highscore Data-------------
router.get('/', async (req, res) => {
    try {
      scoreData = await Highscore.findAll({});
      res.status(200).json(scoreData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// ------------------------------
module.exports = router, scoreData;