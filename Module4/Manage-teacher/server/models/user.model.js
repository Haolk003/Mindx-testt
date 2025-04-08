const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: String,
  address: String,
  identity: String,
  dob: Date,
  role: { type: String, enum: ["STUDENT", "TEACHER", "ADMIN"], required: true },
  isDeleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
