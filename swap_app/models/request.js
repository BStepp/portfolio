var mongoose = require("mongoose");

// SCHEMA SETUP
var requestSchema = new mongoose.Schema({
  author: String,
  skill: String,
  supervisor: String,
  date: Date,
  startTime: String,
  endTime: String,
  prefDate: String,
  prefStartTime: String,
  prefEndTime: String,
  comments: String
});

module.exports = mongoose.model("Request", requestSchema);