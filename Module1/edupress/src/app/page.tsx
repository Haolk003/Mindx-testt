"use client";
import FeaturedCourses from "@/components/FeatureCourse";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import Categories from "@/components/home/TopCategories";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/courses", fetcher);

  if (error) return <div>Error loading courses</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {/* {data.map((course: any) => (
        <div key={course.id} className="p-4 border mb-4 rounded">
          <h2 className="font-semibold">{course.title}</h2>
          <p>{course.description}</p>
          <p className="text-green-500">${course.price}</p>
        </div>
      ))} */}
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedCourses />
      <Footer />
    </div>
  );
}
