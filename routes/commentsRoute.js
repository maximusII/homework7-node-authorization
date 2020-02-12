const express = require("express");
const bodyParser = require("body-parser");
let jsonParser = bodyParser.json();
let router = express.Router();

const mongoose = require("mongoose");
const Comments = require("../models/comments");
const Products = require("../models/products");

router.get("/", (req, res) => {
  const ids = req.query.productId;

  if (req.url.includes("?")) {
    Comments.find()
      .exec()
      .then(docs => {
        const found = docs.find(el => el.product === ids);
        console.log(found);
        if (found) {
          res.status(200).json({
            status: "success",
            сomments: found
          });
        } else {
          res.status(200).json({
            status: "success",
            сomments: []
          });
        }
      });

    // docs.find(el => el._id === ids))

    // .then(prod => {
    //   console.log(prod);

    //   res.status(200).json(prod);
    // });

    // res.status(200).json(docs)

    return;
  }

  Comments.find()
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
  const comment = new Comments({
    _id: new mongoose.Types.ObjectId(),
    product: req.body.product,
    author: req.body.author,
    text: req.body.text,
    mark: req.body.mark
  });

  comment
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        status: "success",
        comment: comment
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
