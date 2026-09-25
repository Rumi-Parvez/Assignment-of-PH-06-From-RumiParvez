"use client";

import { useState } from "react";

import { IWorkoutData } from "../types/IData";
import LibraryCard from "./libraryCard";
import Sort from "./sort";

interface LibraryClientProps {
  LibraryData: IWorkoutData[];
}

const LibraryClient = ({ LibraryData }: LibraryClientProps) => {
  const [sortBy, setSortBy] = useState("duration");

  const sortedData = [...LibraryData].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return a.rating - b.rating;
    }

    return 0;
  });

  return (
    <div id="library">

      <div className="pt-20 mb-10 space-y-2">
        <h1 className="font-oswald text-3xl font-semibold">
          THE LIBRARY
        </h1>

        <p className="text-sm text-gray-300 font-light">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="flex justify-end mb-6">
        <Sort
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      <div className="grid grid-cols-3 gap-7">
        {sortedData.map((workout) => (
          <LibraryCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>

    </div>
  );
};

export default LibraryClient;