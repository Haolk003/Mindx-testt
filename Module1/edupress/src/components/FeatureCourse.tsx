// src/components/FeaturedCourses.tsx

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Create An LMS Website With LearnPress",
    image: "/course-1.jpg",
    category: "Photography",
    weeks: "2 Weeks",
    students: 156,
    price: "$29.0",
    salePrice: "Free",
  },
  {
    id: 2,
    title: "Design A Website With ThimPress",
    image: "/course-2.jpg",
    category: "Photography",
    weeks: "2 Weeks",
    students: 156,
    price: "$69.0",
    salePrice: "$49.0",
  },
  {
    id: 3,
    title: "Design A Website With ThimPress",
    image: "/course-2.jpg",
    category: "Photography",
    weeks: "2 Weeks",
    students: 156,
    price: "$69.0",
    salePrice: "$49.0",
  },
  {
    id: 4,
    title: "Create An LMS Website With LearnPress",
    image: "/course-1.jpg",
    category: "Photography",
    weeks: "2 Weeks",
    students: 156,
    price: "$29.0",
    salePrice: "Free",
  },
  {
    id: 5,
    title: "Create An LMS Website With LearnPress",
    image: "/course-1.jpg",
    category: "Photography",
    weeks: "2 Weeks",
    students: 156,
    price: "$29.0",
    salePrice: "Free",
  },
  {
    id: 6,
    title: "Design A Website With ThimPress",
    image: "/course-2.jpg",
    category: "Photography",
    weeks: "2 Weeks",
    students: 156,
    price: "$69.0",
    salePrice: "$49.0",
  },
  // Add more courses as needed...
];

export default function FeaturedCourses() {
  return (
    <section className="py-16">
      <div className="container max-w-[1300px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <p className="text-muted-foreground">Explore our Popular Courses</p>
          </div>
          <Button variant="outline">All Courses</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    {course.category}
                  </Badge>
                </div>

                <CardContent className="p-3 space-y-3">
                  <div className="text-muted-foreground text-sm">
                    by DeterminedPothas
                  </div>
                  <h3 className="font-semibold text-lg leading-snug">
                    {course.title}
                  </h3>

                  <div className="flex items-center justify-between text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {course.weeks}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      {course.students} Students
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="line-through mr-2">{course.price}</span>
                      <span className="text-primary font-bold">
                        {course.salePrice}
                      </span>
                    </div>
                    <Button size="sm" variant="ghost">
                      View More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
