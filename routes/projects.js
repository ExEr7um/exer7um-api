const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Получить проекты
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.json({ message: err });
  }
});

// Получить определенный проект
router.get("/:projectId", async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    res.json(project);
  } catch (err) {
    res.json({ message: err });
  }
});

// Создать проект
router.post("/", async (req, res) => {
  const project = new Project(req.body);
  try {
    const response = await project.save();
    res.json(response);
  } catch (err) {
    res.json({ message: err });
  }
});

// Обновить проект
router.patch("/:projectId", async (req, res) => {
  try {
    const response = await Project.updateOne(
      { _id: req.params.projectId },
      { $set: req.body }
    );
    res.json(response);
  } catch (err) {
    res.json({ message: err });
  }
});

// Удалить проект
router.delete("/:projectId", async (req, res) => {
  try {
    const response = await Project.deleteOne({ _id: req.params.projectId });
    res.json(response);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
