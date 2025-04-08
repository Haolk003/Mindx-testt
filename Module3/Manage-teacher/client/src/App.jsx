import { Eye } from "lucide-react";
import { useTeachers } from "./hooks/useTeacher";
import { useEffect, useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import useSWR from "swr";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Button,
  TextField,
  TablePagination,
  Chip,
} from "@mui/material";
import AddTeacherModal from "./components/AddteacherModal";

export default function TeacherTable() {
  const [openModalAddTeacher, setOpenModalAddTeacher] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/api/teachers",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleCloseModalAddTeacher = () => {
    setOpenModalAddTeacher(false);
  };

  if (isLoading) return <p className="text-center">Đang tải dữ liệu...</p>;
  if (error)
    return <p className="text-center text-red-500">Lỗi khi tải dữ liệu!</p>;

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", p: 2 }}>
      <AddTeacherModal
        open={openModalAddTeacher}
        handleClose={handleCloseModalAddTeacher}
      />
      <div className="flex items-center justify-end mb-10">
        <div className="flex items-center gap-5">
          <input
            placeholder="Tìm kiếm giáo viên"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-[40px] w-[300px] border border-gray-300 rounded-md px-2"
          />
          <button className="bg-gray-200 px-2  h-[40px] text-[11px] py-1 flex items-center gap-2 font-semibold rounded-md">
            <BsArrowRepeat /> <p>Tải lại</p>
          </button>
          <button
            className="bg-gray-200 px-2  h-[40px] text-[11px] py-1 flex items-center gap-2 font-semibold rounded-md cursor-pointer"
            onClick={() => setOpenModalAddTeacher(true)}
          >
            <IoMdPersonAdd />
            <p>Tạo mới</p>
          </button>
        </div>
      </div>
      {/* Thanh tìm kiếm */}

      {/* Bảng danh sách giáo viên */}
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>
                <b>Mã</b>
              </TableCell>
              <TableCell>
                <b>Giáo viên</b>
              </TableCell>
              <TableCell>
                <b>Trình độ (cao nhất)</b>
              </TableCell>
              <TableCell>
                <b>Bộ môn</b>
              </TableCell>
              <TableCell>
                <b>TT Công tác</b>
              </TableCell>
              <TableCell>
                <b>Địa chỉ</b>
              </TableCell>
              <TableCell>
                <b>Trạng thái</b>
              </TableCell>
              <TableCell>
                <b>Hành động</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.teachers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((teacher) => (
                <TableRow key={teacher._id}>
                  <TableCell>{teacher.code}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar src={teacher.avatar} sx={{ mr: 1 }} />
                      <div>
                        <p>{teacher.userId.name}</p>
                        <small>{teacher.userId.email}</small>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    Bậc:Cao <br />
                    <small>{teacher.name}</small>
                  </TableCell>
                  <TableCell>{teacher.location || "N/A"}</TableCell>
                  <TableCell>
                    {teacher.teacherPositionId[0].name || "N/A"}
                  </TableCell>
                  <TableCell>{teacher.userId.phoneNumber}</TableCell>
                  <TableCell>
                    <span className="bg-green-500 rounded-md px-4 py-[3px]">
                      Đang công tác
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" size="small">
                      Chi tiết
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={data.teachers.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(e, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) =>
          setRowsPerPage(parseInt(e.target.value, 10))
        }
      />
    </Paper>
  );
}
