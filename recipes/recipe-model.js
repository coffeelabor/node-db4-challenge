const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getIngredients
};

function getRecipes() {
  return db("recipes");
}

function getIngredients() {
  return db("ingredients");
}
