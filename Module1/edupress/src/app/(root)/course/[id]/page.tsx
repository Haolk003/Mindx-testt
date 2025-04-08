import CourseDetails from "@/components/course/CourseDetail";
import CourseHeader from "@/components/course/CourseHeader";
import CoursePromoCard from "@/components/course/CoursePromo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Course() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[80vh]">
        <div className="relative">
          <CourseHeader />
          <div className="absolute top-20 right-20">
            <CoursePromoCard />
          </div>
        </div>
        <CourseDetails />
      </div>
      <Footer />
    </div>
  );
}
