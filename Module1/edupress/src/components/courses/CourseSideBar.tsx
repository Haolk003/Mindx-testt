import React, { useState } from "react";
import { Star } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const categories = [
  "Commercial",
  "Office",
  "Shop",
  "Educate",
  "Academy",
  "Studio",
  "University",
];
const levels = ["All levels", "Beginner", "Intermediate", "Expert"];

const CourseSideBar = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  const toggleSelection = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    item: string
  ) => {
    setList(
      list.includes(item) ? list.filter((i) => i !== item) : [...list, item]
    );
  };

  return (
    <aside className="space-y-6">
      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-full p-3 border rounded-lg focus:outline-none"
        />
      </div>

      {/* Category */}
      <div>
        <h3 className="font-semibold mb-4">Course Category</h3>
        <ul className="space-y-2 text-sm">
          {categories.map((cat) => (
            <li key={cat} className="flex items-center gap-2">
              <Checkbox
                checked={selectedCategories.includes(cat)}
                onCheckedChange={() =>
                  toggleSelection(
                    selectedCategories,
                    setSelectedCategories,
                    cat
                  )
                }
              />
              <span>{cat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Level */}
      <div>
        <h3 className="font-semibold mb-4">Level</h3>
        <ul className="space-y-2 text-sm">
          {levels.map((level) => (
            <li key={level} className="flex items-center gap-2">
              <Checkbox
                checked={selectedLevels.includes(level)}
                onCheckedChange={() =>
                  toggleSelection(selectedLevels, setSelectedLevels, level)
                }
              />
              <span>{level}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Review */}
      <div>
        <h3 className="font-semibold mb-4">Review</h3>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            {Array.from({ length: 5 - i }).map((_, j) => (
              <Star
                key={j}
                size={14}
                className="text-yellow-500 fill-yellow-500"
              />
            ))}
            ({1025})
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CourseSideBar;
