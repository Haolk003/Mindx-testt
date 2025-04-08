import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CoursePromoCard = () => {
  return (
    <Card className="rounded-xl shadow-lg p-4 text-center w-[280px]">
      <CardContent>
        <h3 className="text-sm font-semibold">Create an LMS website</h3>
        <p className="text-xs text-gray-500">with LearnPress plugin</p>

        {/* Hình ảnh */}
        <div className="my-4">
          <Image
            src="/course-1.jpg" // Đổi thành đường dẫn đúng
            alt="LMS Course"
            width={200}
            height={150}
            className="mx-auto"
          />
        </div>

        {/* Giá tiền */}
        <div className="flex items-center justify-center gap-2 text-lg font-semibold">
          <span className="text-gray-400 line-through text-sm">$69.0</span>
          <span className="text-red-500">$49.0</span>
        </div>

        {/* Nút CTA */}
        <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-3 w-full">
          Start Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CoursePromoCard;
