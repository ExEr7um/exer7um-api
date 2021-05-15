const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  ru_title: {
    type: String,
    required: true,
  },
  en_title: {
    type: String,
    required: true,
  },
  ru_description: {
    type: String,
    required: true,
  },
  en_description: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Projects", ProjectSchema);
