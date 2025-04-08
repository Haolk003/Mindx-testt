const express = require("express");
const User = require("../models/User.model");
const router = express.Router();

// Lấy danh sách tất cả người dùng
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Thêm người dùng mới
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
