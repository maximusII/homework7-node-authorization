const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientsSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  description: String
});

module.exports = mongoose.model("Ingredients", ingredientsSchema);
