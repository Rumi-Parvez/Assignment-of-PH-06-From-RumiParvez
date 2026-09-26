"use client";

import { Suspense, useMemo, useState } from "react";

import MyPlanDataDaseboard from "../components/myPlanDataDaseboard";
import Saved from "../components/saved";
import SavedPlanDaseboard from "../components/savedPlanDaseboard";
import Sort from "../components/sort";
import TodaysPlan from "../components/TodaysPlan";
import { useAddlist } from "../hook/Isaddedlist";
import DataLoading from "../loading/dataLoading";
import { IWorkoutData } from "../types/IData";

const MyPlanPage = () => {
  const {
    isActive,
    setIsActive,
    todaysPlan,
    savedData,
  } = useAddlist();

  const [sortBy, setSortBy] = useState("duration");

  const handleClickActive = (type: string) => {
    setIsActive(type);
  };

  const sortWorkouts = (
    data: IWorkoutData[],
    type: string
  ): IWorkoutData[] => {
    return [...data].sort((a, b) => {
      if (type === "duration") {
        return a.duration - b.duration;
      }

      if (type === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      if (type === "rating") {
        return a.rating - b.rating;
      }

      return 0;
    });
  };

  const sortedTodaysPlan = useMemo(() => {
    return sortWorkouts(todaysPlan, sortBy);
  }, [todaysPlan, sortBy]);

  const sortedSavedData = useMemo(() => {
    return sortWorkouts(savedData, sortBy);
  }, [savedData, sortBy]);

  return (
    <div className="my-6 md:my-8 lg:my-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-oswald font-bold">
          MY PLAN
        </h1>

        <p className="text-sm text-gray-400 font-light mt-2">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {isActive === "TPlane" ? (
        <MyPlanDataDaseboard />
      ) : (
        <SavedPlanDaseboard />
      )}

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-5">
        <div className="flex items-center gap-3 sm:gap-6 md:gap-10 py-2 mt-5 text-xs sm:text-sm text-gray-600 bg-gray-700/20 w-full sm:w-fit min-w-0 sm:min-w-70 justify-center rounded-xl border border-gray-700">
          <button
            onClick={() => handleClickActive("TPlane")}
            className={
              isActive === "TPlane"
                ? "btn px-3 sm:px-5 cursor-pointer whitespace-nowrap"
                : "px-3 sm:px-5 cursor-pointer whitespace-nowrap"
            }
          >
            Today’s Plan
          </button>

          <button
            onClick={() => handleClickActive("saved")}
            className={
              isActive === "saved"
                ? "btn px-4 sm:px-8 cursor-pointer whitespace-nowrap"
                : "px-4 sm:px-8 cursor-pointer whitespace-nowrap"
            }
          >
            Saved
          </button>
        </div>

        <div className="w-full md:w-auto">
          <Sort
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>
      </div>

      <Suspense
        fallback={
          <>
            <DataLoading />
          </>
        }
      >
        {isActive === "TPlane" ? (
          <TodaysPlan
            sortedTodaysPlan={sortedTodaysPlan}
          />
        ) : (
          <Saved
            sortedSavedData={sortedSavedData}
          />
        )}
      </Suspense>
    </div>
  );
};

export default MyPlanPage;