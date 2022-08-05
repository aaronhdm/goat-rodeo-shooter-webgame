const router = require('express').Router();


// GET homepage
router.get('/game', async (req, res) => {
    try {
      res.render('gamepage', );
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;