const router = require("express").Router();
const Message = require("../models/Message");
const verify = require("./verifyToken");

// Подключение SendGrid
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Получить сообщения
router.get("/", verify, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.json({ message: err });
  }
});

// Создать сообщение
router.post("/", async (req, res) => {
  const message = new Message(req.body);
  const email = {
    to: "exer7um@gmail.com",
    from: "exer7um@gmail.com",
    subject: "Новое сообщение | exer7um.github.io",
    templateId: "d-e52a19a80d384a039a3c3a9c8c404421",
    dynamicTemplateData: {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    },
  };
  try {
    const response = await message.save();
    sgMail.send(email);
    res.json(response);
  } catch (err) {
    res.json({ message: err });
  }
});

// Обновить сообщение
router.patch("/:messageId", verify, async (req, res) => {
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
router.delete("/:messageId", verify, async (req, res) => {
  try {
    const response = await Message.deleteOne({ _id: req.params.messageId });
    res.json(response);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
