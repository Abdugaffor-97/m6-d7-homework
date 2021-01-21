const { DataTypes } = require("sequelize/types");
const sequelize = require("./db_setup");
const Author = require("./author");
const Category = require("./category");

module.exports = () => {
  const Atricle = sequelize.define(
    "atricle",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      headline: { type: DataTypes.STRING, allowNull: false },
      sub_header: { type: DataTypes.STRING, allowNull: false },
      cover: { type: DataTypes.TEXT },
    },
    { timestamps: false }
  );
  Atricle.associations = () => {
    Atricle.belongsTo(Author, { foreignKey: "author_id" });
    Atricle.belongsTo(Category, { foreignKey: "category_id" });
  };
  return Atricle;
};
