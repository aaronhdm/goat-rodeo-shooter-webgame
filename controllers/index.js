const router = require('express').Router();

const gameRoutes = require('./game-routes.js');
const howtoplayRoutes = require('./howtoplay-routes.js');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/', gameRoutes);
router.use('/', howtoplayRoutes);

module.exports = router;