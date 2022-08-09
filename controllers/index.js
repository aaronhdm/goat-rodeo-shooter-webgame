const router = require('express').Router();

const gameRoutes = require('./game-routes.js');
const howtoplayRoutes = require('./howtoplay-routes.js');
const homeRoutes = require('./home-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/', homeRoutes);
router.use('/', gameRoutes);
router.use('/', howtoplayRoutes);
router.use('/', userRoutes);

module.exports = router;