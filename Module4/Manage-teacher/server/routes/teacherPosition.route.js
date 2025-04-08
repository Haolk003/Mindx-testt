const express = require("express");
const TeacherPosition = require("../models/teacherPosition.model");
const router = express.Router();

// Lấy danh sách vị trí giáo viên
router.get("/", async (req, res) => {
  const positions = await TeacherPosition.find();
  res.json(positions);
});

router.post("/", async (req, res) => {
  try {
    const { name, code, des, isActive } = req.body;

    // Kiểm tra trùng mã code
    const existingPosition = await TeacherPosition.findOne({ code });
    if (existingPosition) {
      return res.status(400).json({ error: "Mã vị trí đã tồn tại" });
    }

    const position = new TeacherPosition({
      name,
      code,
      des,
      isActive,
    });

    await position.save();
    res.status(201).json(position);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
