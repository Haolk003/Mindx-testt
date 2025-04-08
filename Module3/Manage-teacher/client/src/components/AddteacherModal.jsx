import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Avatar,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function AddTeacherModal({ open, handleClose }) {
  const [teacher, setTeacher] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    cccd: "",
    address: "",
    position: "",
    degree: [],
    avatar: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTeacher({ ...teacher, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddDegree = () => {
    setTeacher({
      ...teacher,
      degree: [...teacher.degree, { level: "", school: "", major: "" }],
    });
  };

  const handleDegreeChange = (index, field, value) => {
    const updatedDegrees = [...teacher.degree];
    updatedDegrees[index][field] = value;
    setTeacher({ ...teacher, degree: updatedDegrees });
  };

  const handleSubmit = () => {
    console.log("Teacher Data:", teacher);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
        }}
      >
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6">Tạo thông tin giáo viên</Typography>
          <IconButton onClick={handleClose}>
            <IoMdClose />
          </IconButton>
        </Box>

        {/* Ảnh đại diện */}
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar src={teacher.avatar} sx={{ width: 80, height: 80, mr: 2 }} />
          <Button
            variant="outlined"
            component="label"
            startIcon={<FaCloudUploadAlt />}
          >
            Chọn ảnh
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
          </Button>
        </Box>

        {/* Thông tin cá nhân */}
        <p className="flex items-center gap-2 mb-6 ">
          <span className="h-[0.5px] border border-indigo-500 w-[100px]"></span>
          <span className="text-[13px] font-semibold">Thông tin cá nhân</span>
          <span className="h-[0.5px] border border-indigo-500 w-[300px]"></span>
        </p>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Họ và tên"
              name="name"
              size="small"
              value={teacher.name}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="date"
              size="small"
              label="Ngày sinh"
              name="dob"
              value={teacher.dob}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              label="Số điện thoại"
              name="phone"
              value={teacher.phone}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email"
              size="small"
              name="email"
              value={teacher.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Số CCCD"
              name="cccd"
              size="small"
              value={teacher.cccd}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Địa chỉ"
              name="address"
              size="small"
              value={teacher.address}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <p className="flex items-center gap-2 mb-5 mt-5 ">
          <span className="h-[0.5px] border border-indigo-500 w-[100px]"></span>
          <span className="text-[13px] font-semibold min-w-[120px]">
            Thông tin công tác
          </span>
          <span className="h-[0.5px] border border-indigo-500 w-[400px]"></span>
        </p>
        {/* Thông tin công tác */}
        <TextField
          fullWidth
          select
          size="small"
          label="Vị trí công tác"
          name="position"
          value={teacher.position}
          onChange={handleInputChange}
          sx={{ mt: 2 }}
        >
          <MenuItem value="Giáo viên">Giáo viên</MenuItem>
          <MenuItem value="Cán bộ quản lý">Cán bộ quản lý</MenuItem>
        </TextField>

        {/* Học vị */}
        <p className="flex items-center gap-2 mb-5 mt-5 ">
          <span className="h-[0.5px] border border-indigo-500 w-[100px]"></span>
          <span className="text-[13px] font-semibold min-w-[50px]">Học vị</span>
          <span className="h-[0.5px] border border-indigo-500 w-full"></span>
        </p>
        {teacher.degree.map((degree, index) => (
          <Grid
            container
            spacing={3}
            key={index}
            alignItems="center"
            className="mb-5"
          >
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Bậc"
                size="small"
                value={degree.level}
                onChange={(e) =>
                  handleDegreeChange(index, "level", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Trường"
                size="small"
                value={degree.school}
                onChange={(e) =>
                  handleDegreeChange(index, "school", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                size="small"
                label="Chuyên ngành"
                value={degree.major}
                onChange={(e) =>
                  handleDegreeChange(index, "major", e.target.value)
                }
              />
            </Grid>
          </Grid>
        ))}
        <Button
          startIcon={<IoMdAdd />}
          onClick={handleAddDegree}
          sx={{ mt: 1 }}
        >
          Thêm
        </Button>

        {/* Nút lưu */}
        <Box display="flex" justifyContent="flex-end" mt={3}>
          <Button
            variant="contained"
            startIcon={<FaSave />}
            onClick={handleSubmit}
          >
            Lưu
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
