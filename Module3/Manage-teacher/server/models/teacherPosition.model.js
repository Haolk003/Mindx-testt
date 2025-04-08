const mongoose = require("mongoose");

const teacherPositionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: String,
  des: String,
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("TeacherPosition", teacherPositionSchema);
