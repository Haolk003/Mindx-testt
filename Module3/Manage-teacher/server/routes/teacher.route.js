const express = require("express");
const Teacher = require("../models/teacher.model");
const User = require("../models/User.model");
const crypto = require("crypto");
const TeacherPosition = require("../models/teacherPosition.model");

const router = express.Router();

// API lấy danh sách giáo viên (có phân trang)
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // Mặc định lấy 10 giáo viên mỗi trang

    const teachers = await Teacher.find()
      .populate("userId", "name email phoneNumber")
      .populate("teacherPositionId", "name")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Teacher.countDocuments();

    res.json({
      total,
      page: Number(page),
      limit: Number(limit),
      teachers,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API tạo giáo viên mới
router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      dob,
      phoneNumber,
      email,
      identityNumber,
      address,
      avatar,
      positionIds,
      degrees,
    } = req.body;

    // Kiểm tra email có tồn tại không
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email đã tồn tại" });
    }

    // Sinh mã giáo viên ngẫu nhiên
    const teacherCode = `GV${Date.now().toString().slice(-6)}`;

    // Tạo tài khoản user trước khi thêm giáo viên
    const newUser = new User({
      name: fullName,
      email,
      phoneNumber,
      address,
      identity: identityNumber,
      dob,
      role: "TEACHER",
    });

    const savedUser = await newUser.save();

    // Tạo giáo viên mới
    const newTeacher = new Teacher({
      userId: savedUser._id,
      code: teacherCode,
      isActive: true,
      isDeleted: false,
      startDate: new Date(),
      teacherPositionId: positionIds,
      degrees,
    });

    const savedTeacher = await newTeacher.save();

    return res
      .status(201)
      .json({ message: "Tạo giáo viên thành công", teacher: savedTeacher });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi server", error: error.message });
  }
});

module.exports = router;
