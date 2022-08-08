const router = require('express').Router();
const { User } = require('../models/user');


// CREATE new user
router.post('/login', async (req, res) => {
    try {
        const userData = await User.create({
            email: req.body.username,
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(userData)
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  });

  module.exports = router;