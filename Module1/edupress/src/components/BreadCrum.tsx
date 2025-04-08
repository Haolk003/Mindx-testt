import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "./ui/breadcrumb";
import { ChevronRight } from "lucide-react";

const BreadCrum = () => {
  return (
    <Breadcrumb className="text-gray-400 text-sm mb-4">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Homepage</BreadcrumbLink>
        <ChevronRight size={14} className="inline mx-1" />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Course</BreadcrumbLink>
        <ChevronRight size={14} className="inline mx-1" />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <span className="text-white">
          The Ultimate Guide To The Best WordPress LMS Plugin
        </span>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrum;
