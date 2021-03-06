const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sku: Number,
  name: String,
  description: String,
  price: Number,
  currency: String,
  creatorId: String,
  created: {
    type: Date,
    default: Date.now
  },
  modified: Date,
  categories: [
    {
      category: String
    }
  ],
  likes: Number,
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredients" }]
});

module.exports = mongoose.model("Product", productSchema);
