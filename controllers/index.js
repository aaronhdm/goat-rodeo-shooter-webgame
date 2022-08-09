const router = require('express').Router();
// const sequelize = require('../../config/connection');
const apiRoutes = require('./api');
const gameRoutes = require('./game-routes.js');
const howtoplayRoutes = require('./howtoplay-routes.js');
const homeRoutes = require('./home-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/api', apiRoutes);
router.use('/', gameRoutes);
router.use('/', homeRoutes);
router.use('/', howtoplayRoutes);
router.use('/', userRoutes);

module.exports = router;