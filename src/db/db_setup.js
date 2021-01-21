const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("DB connected"))
  .catch((e) => {
    "DB connection failed", e;
  });

module.exports = sequelize;
