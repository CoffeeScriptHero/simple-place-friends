const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameSchema = new Schema({
  id: Number,
  name: String,
  title: String,
  img: String,
  url: String,
  categories: [String],
});

const GameModel = mongoose.model("game", GameSchema);

module.exports = GameModel;
