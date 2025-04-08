import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationEllipsis,
  PaginationPrevious,
} from "../ui/pagination";

const CoursePagination = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem className="mr-2">
          <div className="bg-black rounded-full text-white text-center w-[30px] h-[30px] flex items-center justify-center ">
            1
          </div>
        </PaginationItem>
        <PaginationItem className="mr-2">
          <div className="bg-black rounded-full w-[30px] h-[30px] text-center text-white flex items-center justify-center">
            2
          </div>
        </PaginationItem>
        <PaginationItem>
          <div className="bg-black rounded-full w-[30px] h-[30px] text-center text-white flex items-center justify-center">
            3
          </div>
        </PaginationItem>
        <PaginationItem className="mr-2">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CoursePagination;
