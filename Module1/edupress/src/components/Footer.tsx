"use client";

import { Facebook, Instagram, Mail, Phone, X } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted py-10 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">EduPress</h2>
          <p className="text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Get Help */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">GET HELP</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Latest Articles</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">PROGRAMS</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>
              <Link href="#">Art & Design</Link>
            </li>
            <li>
              <Link href="#" className="text-primary font-semibold">
                Business
              </Link>
            </li>
            <li>
              <Link href="#">IT & Software</Link>
            </li>
            <li>
              <Link href="#">Languages</Link>
            </li>
            <li>
              <Link href="#">Programming</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">CONTACT US</h3>
          <p className="text-muted-foreground text-sm">
            Address: 2231 New Design Str, Lorem Ipsum 10, Hudson Yards, USA
          </p>
          <p className="flex items-center text-sm gap-2">
            <Phone size={16} /> (+123) 2500-567-898
          </p>
          <p className="flex items-center text-sm gap-2">
            <Mail size={16} /> support@gmail.com
          </p>

          <div className="flex gap-4 mt-2">
            <Facebook className="hover:text-primary cursor-pointer" />
            <Instagram className="hover:text-primary cursor-pointer" />
            <X className="hover:text-primary cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t mt-10 pt-6 text-center text-sm text-muted-foreground">
        Copyright © 2024 LearnPress LMS | Powered by ThinPress
      </div>
    </footer>
  );
}
