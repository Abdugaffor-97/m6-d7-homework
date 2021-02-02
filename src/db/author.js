const { DataTypes } = require("sequelize/types");
const sequelize = require("./db_setup");

module.exports = () => {
  const Author = sequelize.define(
    "author",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: { type: DataTypes.STRING, allowNull: false },
      last_nale: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );
  return Author;
};
