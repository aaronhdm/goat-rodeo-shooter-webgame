const router = require('express').Router();
const highscoresRoutes = require('./highscoresRoutes.js');

router.use('/score', highscoresRoutes);

module.exports = router;