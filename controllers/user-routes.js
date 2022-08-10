const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');


// CREATE new user
router.post('/users', async (req, res) => {
    try {
        const userData = await User.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });
        console.log("NEW USER");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
// --------------------------------


let thisUserData;

// Login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne(
            {
                where: {
                    username: req.body.username
                }
            });
        console.log(userData.id);
        thisUserData = userData;
        console.log(thisUserData);

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again.' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            console.log(req.session);
            res.json({userData});
        });


    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;