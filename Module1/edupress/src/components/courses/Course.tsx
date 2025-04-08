"use client";

import React from "react";
import CourseItem from "./CourseItem";
import CourseSideBar from "./CourseSideBar";
import Navbar from "../Navbar";
import CoursePagination from "./CoursePagination";
import Footer from "../Footer";

const Course = () => {
  return (
    <div>
      <Navbar />

      <section className="container py-10 mx-auto ">
        <h1 className="text-3xl font-bold mb-6">All Courses</h1>
        <div className="grid grid-cols lg:grid-cols-4 gap-10">
          <div className="lg:col-span-3 lg:grid-cols-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <CourseItem
                id="create-an-lms-website-with-learnpress"
                key={index}
                author="Kenny White"
                category="Commercial"
                image="/course-1.jpg"
                price={69}
                salePrice={49}
                studentTotal={156}
                title="Create An LMS Website With LearnPress"
              />
            ))}
          </div>
          <CourseSideBar />
        </div>
        <div className="mt-10">
          <CoursePagination />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Course;
