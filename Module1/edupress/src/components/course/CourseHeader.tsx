"use client";

import {
  ChevronRight,
  Users,
  Clock,
  Layers,
  FileText,
  HelpCircle,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";

const CourseHeader = () => {
  return (
    <div className="">
      {/* Breadcrumb */}
      <Breadcrumb className="text-gray-800 text-sm  bg-gray-200 py-3">
        <div className="w-[80%] mx-auto">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Homepage</BreadcrumbLink>
            <ChevronRight size={14} className="inline mx-1" />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Course</BreadcrumbLink>
            <ChevronRight size={14} className="inline mx-1" />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span className="text-gray-500">
              The Ultimate Guide To The Best WordPress LMS Plugin
            </span>
          </BreadcrumbItem>
        </div>
      </Breadcrumb>
      <div className="bg-black py-8">
        <div className="w-[80%] mx-auto text-white">
          {/* Course Title */}
          <h1 className="text-2xl font-semibold mb-2">
            The Ultimate Guide To The Best WordPress LMS Plugin
          </h1>

          {/* Course Info */}
          <div className="flex items-center text-sm text-gray-300 space-x-4">
            <span className="flex items-center gap-1 ">
              <Clock size={16} className="text-orange-500" /> 2 Weeks
            </span>
            <span className="flex items-center gap-1">
              <Users size={16} className="text-orange-500" /> 156 Students
            </span>
            <span className="flex items-center gap-1">
              <Layers size={16} className="text-orange-500" /> All levels
            </span>
            <span className="flex items-center gap-1">
              <FileText size={16} className="text-orange-500" /> 20 Lessons
            </span>
            <span className="flex items-center gap-1">
              <HelpCircle size={16} className="text-orange-500" /> 3 Quizzes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
