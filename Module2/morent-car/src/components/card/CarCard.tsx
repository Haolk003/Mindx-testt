import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { Heart } from "lucide-react";

function CarCard() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium">Koenigsegg</h3>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mb-4">Sport</p>
        <div className="flex justify-center mb-4">
          <Image
            src="/car.jpg"
            alt="Car"
            width={180}
            height={120}
            className="object-contain"
          />
        </div>
        <div className="flex justify-between items-center text-sm mb-2">
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7 13.5C7 12.67 7.67 12 8.5 12C9.33 12 10 12.67 10 13.5C10 14.33 9.33 15 8.5 15C7.67 15 7 14.33 7 13.5ZM12.5 17.5C11.67 17.5 11 16.83 11 16C11 15.17 11.67 14.5 12.5 14.5C13.33 14.5 14 15.17 14 16C14 16.83 13.33 17.5 12.5 17.5ZM15.5 13.5C14.67 13.5 14 12.83 14 12C14 11.17 14.67 10.5 15.5 10.5C16.33 10.5 17 11.17 17 12C17 12.83 16.33 13.5 15.5 13.5Z"
                fill="#90A3BF"
              />
            </svg>
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 3.5C17.5 2.4 16.6 1.5 15.5 1.5H8.5C7.4 1.5 6.5 2.4 6.5 3.5V4.5H3.5C2.4 4.5 1.5 5.4 1.5 6.5V14.5C1.5 15.6 2.4 16.5 3.5 16.5H6.5V20.5C6.5 21.6 7.4 22.5 8.5 22.5H15.5C16.6 22.5 17.5 21.6 17.5 20.5V16.5H20.5C21.6 16.5 22.5 15.6 22.5 14.5V6.5C22.5 5.4 21.6 4.5 20.5 4.5H17.5V3.5ZM15.5 3.5V4.5H8.5V3.5H15.5ZM15.5 20.5H8.5V12.5H15.5V20.5ZM20.5 14.5H17.5V12.5H17V11H7V12.5H6.5V14.5H3.5V6.5H20.5V14.5Z"
                fill="#90A3BF"
              />
            </svg>
            <span>2 People</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <div>
          <span className="font-bold">$99.00</span>
          <span className="text-muted-foreground text-sm">/day</span>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Rent Now</Button>
      </CardFooter>
    </Card>
  );
}

export default CarCard;
