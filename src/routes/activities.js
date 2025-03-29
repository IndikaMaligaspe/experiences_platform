const express = require("express");
const router = express.Router();
const mock = require("../mock/activities.json");

router.post("/", (req, res) => {
  const activity = req.body;
  activity.id = `mock-${Date.now()}`;
  mock.push(activity);
  res.status(201).json({ message: "Activity created", activity });
});

router.get("/:id", (req, res) => {
  const found = mock.find((a) => a.id === req.params.id);
  if (!found) return res.status(404).json({ error: "Not found" });
  res.json(found);
});

router.get("/:id/availability", (req, res) => {
  const { id } = req.params;
  const availability = require("../mock/availability.json");
  const data = availability.filter((a) => a.activityId === id);
  if (data.length === 0)
    return res.status(404).json({ error: "No availability found" });
  res.json(data);
});

module.exports = router;
