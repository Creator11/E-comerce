
const {Sequelize} = require('sequelize')



module.exports = new Sequelize({
    database: " ",
    username: " ",
    password: " ",
    host: " ",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false  
      }
    },
  });
    

