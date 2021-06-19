var express = require("express");
var router = express.Router();
const axios = require("axios");

router.get("/", function (req, res, next) {
  res.send("This is real route");
});

router.get("/students", (req, res, next) => {
  axios
    .get("https://hp-api.herokuapp.com/api/characters")
    .then((response) => response.data)
    .then((response) => {
      if (req.query.house) {
        const data = response.filter(
          (student) => student.house === req.query.house
        );
        return res.json({ data });
      }
      return res.json({ data: response });
    });
});
// router.get("/students/:house", (req, res, next) => {
//   axios.get("https://hp-api.herokuapp.com/api/characters").then((response) => {
//     console.log(req.params);
//     return res.json({ data: response.data });
//   });
// });

// router.get("/students/:house", (req, res, next) => {
//   console.log(req.params);
//   axios
//     .get("https://hp-api.herokuapp.com/api/characters")
//     .then((response) => {
//       console.log(req.params);
//       return response.filter((student, index) => student.house === house);
//     })
//     .then((response) => res.status(200).json({ data: response.data }));
// });

router.get("/randomstudent", (req, res, next) => {
  axios.get("https://hp-api.herokuapp.com/api/characters").then((response) => {
    const max = response.data.length;
    const random = Math.floor(Math.random() * max);
    console.log(max, random);
    res.status(200).json({ data: response.data[random] });
  });
});

module.exports = router;
