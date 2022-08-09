const { belongsTo } = require('./Highscore');
const Highscore = require('./Highscore');
const User = require('./User');

User.hasMany(Highscore, {
    foreignKey: 'user_id',
});

Highscore.belongsTo(User, {
    foreignKey: 'user_id'
});















module.exports = { Highscore, User };