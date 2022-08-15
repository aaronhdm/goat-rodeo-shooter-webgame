const router = require('express').Router();
const highscoresRoutes = require('./highscoresRoutes.js');
const userDataRoutes = require('./userDataRoutes.js');

router.use('/userscorepage', highscoresRoutes);
router.use('/userData', userDataRoutes);

module.exports = router;