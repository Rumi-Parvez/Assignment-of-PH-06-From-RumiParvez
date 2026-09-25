"use client";

import { FaRegBookmark } from "react-icons/fa";
import { RiFolderAddLine } from "react-icons/ri";
import { toast } from "react-toastify";

import { useAddlist } from "../hook/Isaddedlist";
import { IWorkoutData } from "../types/IData";

const WorkoutAction = ({ data }: { data: IWorkoutData }) => {
  const {
    todaysPlan,
    setTodaysPlan,
    planCount,
    setPlanCount,
    savedData,
    setSavedData,
    saveCount,
    setSaveCount,
  } = useAddlist();

  const planLimitReached = todaysPlan.length >= 5;

  const alreadyAdded = todaysPlan.some(
    (item) => item.id === data.id
  );

  const alreadySaved = savedData.some(
    (item) => item.id === data.id
  );

  const handleClicktodaysplan = () => {
    if (todaysPlan.find((item) => item.id === data.id)) {
      toast.warning("Workout already added to today's plan.");
      return;
    }

    if (todaysPlan.length >= 5) {
      toast.warning("You can add a maximum of 5 workouts for today.");
      return;
    }

    setTodaysPlan([...todaysPlan, data]);

    setPlanCount(planCount + 1);

    toast.success(`${data.name} Workout added to today's plan!`);
  };

  const handleClickSaved = () => {
    if (savedData.find((item) => item.id === data.id)) {
      toast.warning("Workout already saved.");
    }

    setSavedData([...savedData, data]);

    setSaveCount(saveCount + 1);

    toast.success(`${data.name} Workout saved for later!`);
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
      <button
        onClick={handleClicktodaysplan}
        disabled={alreadyAdded || planLimitReached}
        className={`flex justify-center items-center gap-3 px-5 sm:px-7 py-2 rounded-xl text-xs font-bold w-full sm:w-auto ${
          alreadyAdded
            ? "bg-gray-600 text-gray-400 cursor-not-allowed"
            : "bg-lime-400 text-black cursor-pointer hover:bg-lime-300"
        }`}
      >
        <RiFolderAddLine className="text-xl" />

        {alreadyAdded
          ? "Already Added"
          : planLimitReached
          ? "Plan Full"
          : "Add to today's plan"}
      </button>

      <button
        onClick={handleClickSaved}
        disabled={alreadySaved}
        className={`flex justify-center items-center text-xs p-3 sm:px-5 sm:py-2 rounded-xl gap-3 w-full sm:w-auto ${
          alreadySaved
            ? "btn bg-gray-600 text-gray-400 cursor-not-allowed"
            : "border border-gray-700 cursor-pointer"
        }`}
      >
        <FaRegBookmark />

        {alreadySaved
          ? "Already Saved"
          : "Save for later"}
      </button>
    </div>
  );
};

export default WorkoutAction;