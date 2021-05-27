const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// Получить сообщения
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.json({ message: err });
  }
});

// Создать сообщение
router.post("/", async (req, res) => {
  const message = new Message(req.body);
  try {
    const response = await message.save();
    res.json(response);
  } catch (err) {
    res.json({ message: err });
  }
});

// Обновить сообщение
router.patch("/:messageId", async (req, res) => {
  try {
    const response = await Message.updateOne(
      { _id: req.params.messageId },
      { $set: req.body }
    );
    res.json(response);
  } catch (err) {
    res.json({ message: err });
  }
});

// Удалить сообщение
router.delete("/:messageId", async (req, res) => {
  try {
    const response = await Message.deleteOne({ _id: req.params.messageId });
    res.json(response);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
