const router = require('express').Router();


// GET homepage
router.get('/other', async (req, res) => {
    try {
      res.render('other', );
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;