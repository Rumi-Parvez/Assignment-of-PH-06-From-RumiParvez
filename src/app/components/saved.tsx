"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { PiFireSimpleFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

import { useAddlist } from "../hook/Isaddedlist";
import { IWorkoutData } from "../types/IData";

const Saved = ({
  sortedSavedData,
}: {
  sortedSavedData: IWorkoutData[];
}) => {
  const {
    isActive,
    setSavedData,
    saveCount,
    setSaveCount,
  } = useAddlist();

  const handleDeletClick = (workoutselecteditme: IWorkoutData) => {
    setSavedData((item) =>
      item.filter(
        (selected) => selected.id !== workoutselecteditme.id
      )
    );

    toast.warning(
      `${workoutselecteditme.name} removed from Saved`
    );

    setSaveCount(saveCount - 1);
  };

  return (
    <>
      {isActive === "saved" ? (
        sortedSavedData.length > 0 ? (
          <div>
            {sortedSavedData.map((itme) => {
              return (
                <div
                  key={itme.id}
                  className="flex justify-between items-center mt-5 bg-gray-700/20 py-5 px-8 rounded-2xl border border-gray-700"
                >
                  <div className="flex gap-8">
                    <Image
                      src={itme.image}
                      width={200}
                      height={100}
                      alt={itme.name}
                      className="w-50 h-30 object-cover object-[center_25%] rounded-2xl"
                    />

                    <div className="space-y-3 mt-2">
                      <h1 className="font-oswald font-bold text-3xl">
                        {itme.name}
                      </h1>

                      <p className="text-sm font-light text-gray-400">
                        {itme.equipment}
                      </p>

                      <div className="flex items-center gap-8 mb-5">
                        <div className="flex justify-between items-center gap-1 text-sm text-gray-400">
                          <IoMdTime className="text-lime-400 text-sm" />
                          {itme.duration}
                        </div>

                        <div className="flex justify-between items-center gap-1 text-sm text-gray-400">
                          <PiFireSimpleFill className="text-lime-400 text-sm" />
                          {itme.caloriesBurned}
                        </div>

                        <div className="flex justify-between items-center gap-1 text-sm text-gray-400">
                          <FaRegStar className="text-lime-400 text-sm" />
                          {itme.rating}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-5 items-center">
                    <Link href={`/exercise/${itme.id}`}>
                      <button className="btn border border-gray-700 py-2 px-7 font-semibold rounded-full flex items-center gap-2 cursor-pointer">
                        View Details
                      </button>
                    </Link>

                    <RxCross2
                      className="text-2xl cursor-pointer"
                      onClick={() => handleDeletClick(itme)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <div className="my-5 h-90 flex flex-col justify-center items-center rounded-xl border border-gray-700 bg-gray-700/10 space-y-1">
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
          </div>
        )
      ) : (
        <div>Hello Wellcome on Error Nug</div>
      )}
    </>
  );
};

export default Saved;