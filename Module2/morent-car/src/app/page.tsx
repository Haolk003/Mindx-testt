import Link from "next/link";
import { Search, Settings2, Bell, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import CarCard from "@/components/card/CarCard";
import FeaturedCarCard from "@/components/card/FeaturedCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50  ">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">MORENT</span>
            </Link>
          </div>
          <div className="relative hidden md:flex md:flex-1 md:items-center md:justify-center md:gap-2">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for a car..."
                className="w-full bg-slate-100 pl-8 pr-4"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-slate-500">
              <Settings2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-500">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-500">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container px-4 py-6 md:px-6 md:py-8 mx-auto">
        {/* Featured Cars */}
        <div className="grid gap-6 md:grid-cols-2">
          <FeaturedCarCard
            title="The Best Platform for Car Rental"
            description="Ease of doing a car rental safely and reliably. Of course at a low price."
            color="bg-blue-600"
            textColor="text-white"
          />
          <FeaturedCarCard
            title="Easy way to rent a car at a low price"
            description="Providing cheap car rental services and safe and comfortable facilities."
            color="bg-blue-50"
            textColor="text-slate-900"
          />
        </div>

        {/* Filter Tabs */}
        <div className="my-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-7 h-auto p-1">
              <TabsTrigger value="all" className="rounded-md py-2">
                All
              </TabsTrigger>
              <TabsTrigger value="suv" className="rounded-md py-2">
                SUV
              </TabsTrigger>
              <TabsTrigger value="sports" className="rounded-md py-2">
                Sports
              </TabsTrigger>
              <TabsTrigger
                value="sedan"
                className="rounded-md py-2 bg-blue-600 text-white"
              >
                Sedan
              </TabsTrigger>
              <TabsTrigger value="coupe" className="rounded-md py-2">
                Coupe
              </TabsTrigger>
              <TabsTrigger value="hatchback" className="rounded-md py-2">
                Hatchback
              </TabsTrigger>
              <TabsTrigger value="mpv" className="rounded-md py-2">
                MPV
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Popular Cars Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Popular Cars</h2>
            <Link
              href="/view-all"
              className="text-blue-600 text-sm font-medium"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <CarCard key={i} />
            ))}
          </div>
        </div>

        {/* Recommended Cars Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recommended Cars</h2>
            <Link
              href="/view-all"
              className="text-blue-600 text-sm font-medium"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <CarCard key={i} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Show More Cars
          </Button>
        </div>
      </main>
    </div>
  );
}
