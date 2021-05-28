const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Доступ запрещен");

  try {
    const isVerified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = isVerified;
    next();
  } catch (err) {
    res.status(400).send("Неправильный токен");
  }
};
