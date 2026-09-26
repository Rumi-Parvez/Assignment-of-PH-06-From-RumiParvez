"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";
import { PiFireSimpleFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

import { useAddlist } from "../hook/Isaddedlist";
import { IWorkoutData } from "../types/IData";

interface TodaysPlanProps {
  sortedTodaysPlan: IWorkoutData[];
}

const TodaysPlan = ({ sortedTodaysPlan }: TodaysPlanProps) => {
  const {
    setTodaysPlan,
    planCount,
    setPlanCount,
  } = useAddlist();

  const handleDeletClick = (
    workoutselecteditme: IWorkoutData
  ) => {
    setTodaysPlan((items) =>
      items.filter(
        (selected) =>
          selected.id !== workoutselecteditme.id
      )
    );

    toast.warning(
      `${workoutselecteditme.name} removed from Today's plan.`
    );

    setPlanCount(planCount - 1);
  };

  const handleMarkDone = (workout: IWorkoutData) => {
    setTodaysPlan((items) =>
      items.filter(
        (selected) =>
          selected.id !== workout.id
      )
    );
    setPlanCount(planCount - 1);

    toast.success(`The ${workout.name} Workout marked as done!`);
  };

  return (
    <>
      {sortedTodaysPlan.length > 0 ? (
        <div>
          {sortedTodaysPlan.map((itme) => (
            <div
              key={itme.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center mt-5 bg-gray-700/20 py-5 px-4 md:px-6 lg:px-8 rounded-2xl border border-gray-700 gap-5"
            >
              <div className="flex flex-col sm:flex-row gap-5 md:gap-8 w-full">
                <Image
                  src={itme.image}
                  width={200}
                  height={100}
                  alt={itme.name}
                  className="w-full sm:w-50 h-50 sm:h-30 object-cover object-[center_20%] rounded-2xl"
                />

                <div className="space-y-3 mt-2">
                  <h1 className="font-oswald font-bold text-2xl md:text-3xl">
                    {itme.name}
                  </h1>

                  <p className="text-sm font-light text-gray-400">
                    {itme.equipment}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-5">
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <IoMdTime className="text-lime-400 text-sm" />
                      {itme.duration}
                    </div>

                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <PiFireSimpleFill className="text-lime-400 text-sm" />
                      {itme.caloriesBurned}
                    </div>

                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <FaRegStar className="text-lime-400 text-sm" />
                      {itme.rating}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-3 md:gap-5 items-center w-full md:w-auto">
                <Link href={`/exercise/${itme.id}`}>
                  <button className="btn border text-xs border-gray-700 py-1 px-3 md:px-5 md:py-2 font-semibold rounded-full flex items-center justify-center cursor-pointer whitespace-nowrap ">
                    View Details
                  </button>
                </Link>

                <button
                  className={`btn tex-xs px-3 md:px-7 font-bold rounded-full flex items-center justify-center gap-2 whitespace-nowrap shrink-0 ${
                    itme.isDone
                      ? "bg-gray-600 text-white"
                      : "bg-lime-400 text-black"
                  }`}
                  onClick={() => handleMarkDone(itme)}
                >
                  <MdOutlineDone className="text-xl shrink-0" />

                  {itme.isDone
                    ? "Completed"
                    : "Mark as Done"}
                </button>

                <RxCross2
                  className="text-2xl cursor-pointer shrink-0"
                  onClick={() => handleDeletClick(itme)}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="my-5 h-90 flex flex-col justify-center items-center text-center px-4 rounded-xl border border-gray-700 bg-gray-700/10 space-y-1">
          <h1 className="text-2xl font-oswald font-bold">
            NOTHING HERE YET
          </h1>

          <p className="text-sm font-light text-gray-400">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="bg-lime-400 text-black px-8 py-2 rounded-full mt-4 font-semibold text-sm"
          >
            Go to workouts
          </Link>
        </div>
      )}
    </>
  );
};

export default TodaysPlan;