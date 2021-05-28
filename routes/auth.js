const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  // Хеширование пароля
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({ ...req.body, password: hashPassword });

  try {
    const response = await user.save();
    res.json(response);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/login", async (req, res) => {
  // Проверка существования Email
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Аккаунт не найден");

  // Проверка пароля
  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isPasswordValid) return res.status(400).send("Неправильный пароль");

  // JWT Token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

module.exports = router;
