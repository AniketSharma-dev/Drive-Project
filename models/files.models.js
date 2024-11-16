const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  path: {
    type: String,
    required: [true, "Path is required"],
  },
  originFile: {
    type: String,
    required: [true, "Path is required"],
  },
});
