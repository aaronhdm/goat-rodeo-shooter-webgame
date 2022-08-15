const router = require('express').Router();


// GET homepage
router.get('/game', async (req, res) => {
    try {
      res.render('gamepage', {
      name: req.session.name, 
      user_id: req.session.user_id
    });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;