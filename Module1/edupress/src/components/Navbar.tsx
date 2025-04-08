"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm py-4  flex items-center justify-between">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500">
          EduPress
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/courses" className="hover:text-orange-500">
            Courses
          </Link>
          <Link href="/blog" className="hover:text-orange-500">
            Blog
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-orange-500">
              Page
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>About Us</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="#" className="hover:text-orange-500">
            LearnPress Add-On
          </Link>
          <Link href="#" className="hover:text-orange-500">
            Premium Theme
          </Link>
        </div>

        {/* Search and Login */}
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Search..."
            className="hidden md:block w-48"
          />
          <Search className="w-5 h-5 text-gray-500 hidden md:block" />
          <Button variant="outline" className="rounded-full">
            <Link href="/login">Login / Register</Link>
          </Button>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden">
              <Menu className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/courses">Courses</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/blog">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>About Us</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/login">Login / Register</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
