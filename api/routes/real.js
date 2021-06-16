var express = require("express");
var router = express.Router();
const axios = require("axios");

router.get("/", function (req, res, next) {
  res.send("This is real route");
});

router.get("/students", (req, res, next) => {
  axios
    .get("https://hp-api.herokuapp.com/api/characters")
    .then((response) => res.status(200).json({ data: response.data }));
});

module.exports = router;
