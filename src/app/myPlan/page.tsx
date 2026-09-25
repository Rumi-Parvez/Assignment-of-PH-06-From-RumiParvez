"use client";

import { useMemo, useState } from "react";

import MyPlanDataDaseboard from "../components/myPlanDataDaseboard";
import Saved from "../components/saved";
import SavedPlanDaseboard from "../components/savedPlanDaseboard";
import Sort from "../components/sort";
import TodaysPlan from "../components/TodaysPlan";
import { useAddlist } from "../hook/Isaddedlist";
import { IWorkoutData } from "../types/IData";

const MyPlanPage = () => {
  const {isActive,
    setIsActive,
    todaysPlan,
    savedData,} = useAddlist();
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
    <div className="my-10 ">
      <div>
        <h1 className="text-3xl font-oswald font-bold">MY PLAN </h1>
        <p className="text-sm text-gray-400 font-light mt-2">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {isActive === "TPlane" ? <MyPlanDataDaseboard></MyPlanDataDaseboard> : <SavedPlanDaseboard></SavedPlanDaseboard>}
      
      

      <div className="flex justify-between items-center">
        <div className="flex items-center  gap-10  py-2 mt-5 text-sm text-gray-600 bg-gray-700/20 w-70 justify-center rounded-xl  border border-gray-700  ">
          <button
            onClick={() => handleClickActive("TPlane")}
            className={
              isActive === "TPlane"
                ? "btn   cursor-pointer"
                : "cursor-pointer"
            }>{`Today’s Plan`}</button>
          <button
            onClick={() => handleClickActive("saved")}
            className={
              isActive === "saved"
                ? "btn px-8 cursor-pointer"
                : "cursor-pointer"
            }>
            Saved
          </button>
        </div>

       <Sort
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>


     {isActive === "TPlane" ? (
        <TodaysPlan sortedTodaysPlan={sortedTodaysPlan} />
      ) : (
        <Saved sortedSavedData={sortedSavedData} />
      )}


      
    </div>
  );
};

export default MyPlanPage;
