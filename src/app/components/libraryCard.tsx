import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { PiFireSimpleFill } from "react-icons/pi";

import { IWorkoutData } from "../types/IData";

const LibraryCard = ({ workout }: { workout: IWorkoutData }) => {
  return (
    <>
      <div>
        <Link href={`/exercise/${workout.id}`}>
          <div className="m-auto border border-gray-400 bg-gray-700/20 rounded-3xl h-auto lg:h-140 overflow-hidden">
            <Image
              src={workout.image}
              width={300}
              height={300}
              alt={`img ${workout.name}`}
              className="w-full lg:w-130 h-64 md:h-72 lg:h-80 object-cover object-[center_20%] rounded-t-3xl"
            />

            <div className="px-5 md:px-6 lg:px-8 mt-7 md:mt-8 lg:mt-10">
              <div className="flex flex-wrap items-center gap-2 md:gap-3 lg:gap-5 mb-4">
                <span className="bg-lime-400 text-black text-xs md:text-sm font-semibold px-3 md:px-4 py-0.5 rounded-full">
                  {workout.muscleGroups[0]}
                </span>

                {workout.muscleGroups.length > 1 ? (
                  <span className="bg-lime-400 text-black text-xs md:text-sm font-semibold px-3 md:px-4 py-0.5 rounded-full">
                    {workout.muscleGroups[1]}
                  </span>
                ) : (
                  ""
                )}
              </div>

              <h1 className="font-oswald text-2xl md:text-3xl mb-1">
                {workout.name}
              </h1>

              <p className="text-sm font-light text-gray-400">
                {workout.equipment}
              </p>

              <div className="divider"></div>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8 mb-5">
                <div className="flex justify-between items-center gap-1 text-sm text-gray-400">
                  <IoMdTime />
                  {workout.duration}
                </div>

                <div className="flex justify-between items-center gap-1 text-sm text-gray-400">
                  <PiFireSimpleFill />
                  {workout.caloriesBurned}
                </div>

                <div className="flex justify-between items-center gap-1 text-sm text-gray-400">
                  <FaRegStar />
                  {workout.rating}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default LibraryCard;
