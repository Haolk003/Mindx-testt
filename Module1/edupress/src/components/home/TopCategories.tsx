// src/components/Categories.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

const categories = [
  { name: "Art & Design", courses: 38, icon: "Palette" },
  { name: "Development", courses: 38, icon: "Code" },
  { name: "Communication", courses: 38, icon: "MessageSquare" },
  { name: "Videography", courses: 38, icon: "Video" },
  { name: "Photography", courses: 38, icon: "Camera" },
  { name: "Marketing", courses: 38, icon: "TrendingUp" },
  { name: "Content Writing", courses: 38, icon: "FileText" },
  { name: "Finance", courses: 38, icon: "DollarSign" },
  { name: "Science", courses: 38, icon: "FlaskConical" },
  { name: "Network", courses: 38, icon: "Wifi" },
];

export default function Categories() {
  return (
    <section className="py-16">
      <div className="container max-w-[1300px] mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Top Categories</h2>
        <p className="text-muted-foreground">Explore our Popular Categories</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
          {categories.map((category, index) => {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const Icon = require("lucide-react")[category.icon] as LucideIcon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-xl transition-shadow cursor-pointer">
                  <CardContent className="flex flex-col items-center gap-4 py-6">
                    <Badge variant="secondary" className="p-4 rounded-full">
                      <Icon
                        className="w-[40px] h-[40px] text-[30px] text-orange-500"
                        size={3}
                        strokeWidth={2}
                      />
                    </Badge>
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.courses} Courses
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <button className="mt-8 border rounded-full px-6 py-2 hover:bg-primary hover:text-white transition">
          All Categories
        </button>
      </div>
    </section>
  );
}
