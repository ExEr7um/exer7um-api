const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.use(express.json());

// Импрортирование Routes
const projectsRoute = require("./routes/projects");

// Использование Routes
app.use("/projects", projectsRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Подключение к MongoDB
mongoose.connect(
  process.env.MONGODB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("База данных подключена!")
);

// Запуск сервера
app.listen(5000);
