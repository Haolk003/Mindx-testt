import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

const FeaturedCarCard = ({
  title,
  description,
  color,
  textColor,
}: {
  title: string;
  description: string;
  color: string;
  textColor: string;
}) => {
  return (
    <Card className={`overflow-hidden ${color} ${textColor}`}>
      <CardContent className="p-6 flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
          <Button
            className={
              color === "bg-blue-600"
                ? "bg-white text-blue-600 hover:bg-slate-100"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }
            size="sm"
          >
            Rent Now
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/OIP.jpg"
            alt="Featured Car"
            width={200}
            height={120}
            className="object-contain"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedCarCard;
