const router = require('express').Router();
// const sequelize = require('../../config/connection');

const gameRoutes = require('./game-routes.js');
const howtoplayRoutes = require('./howtoplay-routes.js');
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/', gameRoutes);
router.use('/', howtoplayRoutes);
router.use('/api', apiRoutes);



module.exports = router;