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

router.get("/randomstudent", (req, res, next) => {
  axios.get("https://hp-api.herokuapp.com/api/characters").then((response) => {
    const max = response.data.length;
    const random = Math.floor(Math.random() * max);
    console.log(max, random);
    res.status(200).json({ data: response.data[random] });
  });
});

module.exports = router;
