const express = require("express");
const router = express.Router();
const mock = require("../mock/activities.json");

router.get("/", (req, res) => {
  const { location, category } = req.query;
  let result = [...mock];
  if (location) result = result.filter((a) => a.location?.city === location);
  if (category) result = result.filter((a) => a.category === category);
  res.json(result);
});

module.exports = router;
