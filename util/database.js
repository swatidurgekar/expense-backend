const Sequelize = require("sequelize");

const sequelize = new Sequelize("expenses-db", "root", "vfx$4Ip45", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
