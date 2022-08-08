const router = require('express').Router();


// GET homepage
router.get('/howtoplay', async (req, res) => {
    try {
      res.render('howtoplay', );
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;