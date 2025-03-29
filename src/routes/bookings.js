const express = require("express");
const router = express.Router();
const bookings = require("../mock/bookings.json");

router.post("/", (req, res) => {
  const booking = {
    id: `booking-${Date.now()}`,
    ...req.body,
    status: "confirmed",
  };
  bookings.push(booking);
  res.status(201).json({ message: "Booking created", booking });
});

router.get("/:bookingId/status", (req, res) => {
  const found = bookings.find((b) => b.id === req.params.bookingId);
  if (!found) return res.status(404).json({ error: "Booking not found" });
  res.json({ status: found.status });
});

module.exports = router;
