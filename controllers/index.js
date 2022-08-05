const router = require('express').Router();

const gameRoutes = require('./game-routes.js');
const otherRoutes = require('./other-routes.js');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/', gameRoutes);
router.use('/', otherRoutes);

module.exports = router;