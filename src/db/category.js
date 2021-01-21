const { DataTypes } = require("sequelize/types");
const sequelize = require("./db_setup");

module.exports = () => {
  const Category = sequelize.define(
    "category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );
};
