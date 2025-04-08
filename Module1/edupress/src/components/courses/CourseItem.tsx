import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
type Props = {
  image: string;
  category: string;
  title: string;
  studentTotal: number;
  price: number;
  salePrice: number;
  author: string;
  id: string;
};

const CourseItem = ({
  id,
  author,
  category,
  image,
  price,
  salePrice,
  studentTotal,
  title,
}: Props) => {
  return (
    <Link href={`/course/${id}`} className="border rounded-xl shadow-sm">
      <div className="relative">
        <Image
          src={image}
          alt="Course Image"
          width={500}
          height={300}
          className="rounded-t-xl object-cover"
        />
        <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded">
          {category}
        </span>
      </div>
      <div className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground">by {author}</p>
        <h2 className="font-semibold">{title}</h2>
        <div className="flex items-center text-xs gap-4">
          <span>2 Weeks</span>
          <span>·</span>
          <span>{studentTotal} Students</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground line-through">${price}</span>
          <span className="text-green-600 font-semibold">${salePrice}</span>
        </div>
        <Button variant="outline" className="w-full">
          View More
        </Button>
      </div>
    </Link>
  );
};

export default CourseItem;
