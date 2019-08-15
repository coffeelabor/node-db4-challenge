const express = require("express");

const db = require("./data/db-config.js");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  try {
    const recipes = await db("recipes");
    res.status(200).json(recipes);
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          "Heres the deal, its not working, but at least your getting an error"
      });
  }
});

module.exports = server;
