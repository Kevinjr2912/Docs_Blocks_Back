const { Sequelize } = require("sequelize");

// Initialize connection parameters
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// Start connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection is Successful");
  })
  .catch((err) => {
    console.error("Can not to connect the data base: ", err);
  });

module.exports = sequelize;