const express = require("express");
const bodyParser = require("body-parser");
let jsonParser = bodyParser.json();
let router = express.Router();

const mongoose = require("mongoose");
const Ingredients = require("../models/ingredients");

router.get("/", (req, res) => {
  Ingredients.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/", jsonParser, (req, res) => {
  const ingredient = new Ingredients({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description
  });

  ingredient
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        status: "success",
        ingredient: ingredient
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
