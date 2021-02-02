const Author = require("./author");
const Article = require("./article");
const Category = require("./category");
const Reaction = require("./reaction");

const models = {
  Author: Author,
  Article: Article,
  Category: Category,
  Reaction: Reaction,
};

Object.keys(models).forEach((model) => {
  if ("associate" in models[model]) {
    models[model].associate(model);
  }
});

module.exports = models;
