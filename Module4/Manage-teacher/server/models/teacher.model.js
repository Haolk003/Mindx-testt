const mongoose = require("mongoose");

const degreeSchema = new mongoose.Schema({
  type: String,
  school: String,
  major: String,
  year: Number,
  isGraduated: Boolean,
});

const teacherSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  code: String,
  startDate: Date,
  endDate: Date,
  teacherPositionId: [
    { type: mongoose.Schema.Types.ObjectId, ref: "TeacherPosition" },
  ],
  degrees: [degreeSchema],
});

module.exports = mongoose.model("Teacher", teacherSchema);
