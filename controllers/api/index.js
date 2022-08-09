const router = require('express').Router();
const highscoresRoutes = require('./highscoresRoutes.js');

router.use('/userscorepage', highscoresRoutes);

module.exports = router;