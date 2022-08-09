const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if(!JAWSDB_URL) {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
} else {
  sequelize = new Sequelize('eadb6a7tx7a4qroa', '	yoxo7y2kqqbfmh9n', 'nixtipza5lr0j9in', {
    host: 't07cxyau6qg7o5nz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
  });
  
  
  
}


module.exports = sequelize;
