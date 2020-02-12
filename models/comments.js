const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientsSchema = Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product: String,
  author: String,
  text: String,
  mark: Number
});

module.exports = mongoose.model("Comments", ingredientsSchema);
