const { DataTypes } = require("sequelize/types");
const sequelize = require("./db_setup");
const Author = require("./author");
const Article = require("./article");

module.exports = () => {
  const Reaction = sequelize.define(
    "reaction",
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
  Reaction.associations = () => {
    Reaction.belongsTo(Author);
  };
  return Reaction;
};
