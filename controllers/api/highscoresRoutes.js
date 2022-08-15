
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Highscore } = require('../../models');
const { User } = require('../../models');
const { QueryTypes } = require('sequelize');



// --------Get Highscore Data-------------
router.get('/', async (req, res) => {
    try {
      const scoreData = await Highscore.findAll({
        attributes: { exclude: ['password'] },
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
        // order: [['username', 'ASC']],
      });
      const userScores = scoreData.map((userScore) =>
      userScore.get({ plain: true })
      
    );
    console.log(userScores)
    res.render('userscorespage', {
      userScores,
    });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // route to create/add a SCORE using async/await
router.post('/', async (req, res) => {
  try { 
    const scoreData = await Highscore.create({
    score: req.body.score,
    user_id: req.session.user_id,
  });
  
  // if the SCORE is successfully created, the new response will be returned as json
  res.status(200).json(scoreData)
  console.log(scoreData)
  // res.render('userscorespage', {
  //   userScores,
  // });
} catch (err) {
  res.status(400).json(err);
}
});

// ------------------------------
module.exports = router;