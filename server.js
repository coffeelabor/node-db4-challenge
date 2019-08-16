const express = require("express");

const db = require("./recipes/recipe-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  db.getRecipes()
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      res.status(500).json({
        message:
          "Heres the deal, its not working, but at least your getting an error"
      });
    });
});

module.exports = server;
