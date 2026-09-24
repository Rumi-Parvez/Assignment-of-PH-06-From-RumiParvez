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
          <div className="m-auto border-2 border-gray-400 bg-gray-700/20 rounded-3xl h-140">
            <Image
              src={workout.image}
              width={300}
              height={300}
              alt={`img ${workout.name}`}
              className="w-130 h-80 object-cover object-[center_20%] rounded-t-3xl"></Image>
            <div className="px-8 mt-10 ">
                <div className="flex items-center gap-5 mb-4">
              <span className="bg-lime-400 text-black text-sm font-semibold px-4 py-0.5 rounded-full ">{workout.muscleGroups[0]}</span>
              
              {
                workout.muscleGroups.length > 1 ? <span className="bg-lime-400 text-black text-sm font-semibold px-4 py-0.5 rounded-full ">{workout.muscleGroups[1]}</span> : ""
              }
            </div>
            <h1 className="font-oswald text-3xl mb-1">{workout.name}</h1>
            <p className="text-sm font-light text-gray-400 ">{workout.equipment}</p>

                  <div className="divider "></div>


            <div className="flex items-center gap-8 mb-5">
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
