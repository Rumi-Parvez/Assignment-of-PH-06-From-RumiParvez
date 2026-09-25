'use client'

import Link from "next/link";

import { useAddlist } from "../hook/Isaddedlist";

const TodaysPlan = () => {
    const {isActive , todaysPlan} = useAddlist();

  return (
    <>
    {
        isActive === "TPlane" ? todaysPlan.length > 0 ? <h1>plan page</h1> : <div>
      <div className="my-5 h-90 flex flex-col justify-center items-center  rounded-xl border border-gray-700  bg-gray-700/10 space-y-1">
        <h1 className="text-2xl font-oswald font-bold ">NOTHING HERE YET</h1>
        <p className="text-sm font-light  text-gray-400">
          Browse the library and add a lift to get today moving.
        </p>
        <Link
          href="/"
          className="bg-lime-400 text-black px-8 py-2 rounded-full mt-4 font-semibold text-sm">
          Go to workouts
        </Link>
      </div>
    </div> : <div>
        hello world
    </div> 
    }
    </>
  );
};

export default TodaysPlan;
