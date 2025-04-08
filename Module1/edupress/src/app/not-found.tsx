"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-center">
      <Image
        src="/course-1.jpg"
        alt="404 Not Found"
        width={500}
        height={300}
        className="mb-6"
      />

      <h1 className="text-4xl font-bold text-blue-700">
        Oops! Lớp học trống trơn...
      </h1>
      <p className="text-gray-600 mt-2 text-lg font-[500]">
        Trang bạn tìm không có sẵn. Có lẽ bạn đang lạc vào một lớp học chưa mở?
      </p>

      <Button
        className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
        onClick={() => router.push("/")}
      >
        Quay về trang chủ
      </Button>
    </div>
  );
};

export default NotFoundPage;
