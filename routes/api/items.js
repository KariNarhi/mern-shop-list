const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Bring in Item model
const Item = require("../../models/Item");

// GET api/items => Get all items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// POST api/items => Post an item
router.post("/", auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
});

// DELETE api/items/:id => Delete an item
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
