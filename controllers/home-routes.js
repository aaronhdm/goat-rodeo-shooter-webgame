const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');



// GET homepage
router.get('/', async (req, res) => {
    try {
      res.render('homepage', {
        name: req.session.name,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // router.get('/login', (req, res) => {
  //   if (req.session.logged_in) {
  //     res.redirect('/');
  //     return;
  //   }
  
  //   res.render('login');
  // });
  module.exports = router;