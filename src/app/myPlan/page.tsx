'use client'

import { useState } from "react";
import Link from "next/link";

const  MyPlanPage = () => {
    
    const [isActive , setIsActive] = useState("TPlane")

    const handleClickActive = (type : string)=>{
        setIsActive(type)
    }



    return (
        <div className="my-10">
            <div >
                <h1 className="text-3xl font-oswald font-bold">MY PLAN </h1>
                <p className="text-sm text-gray-400 font-light mt-2">Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className="bg-gray-700/20 rounded-2xl  border border-gray-700 mt-8">
                <div className="flex justify-center  items-center gap-3 my-10  px-15 py-  ">
                <div className=" text-left space-y-2 w-800">
                    <p className="text-sm font-light text-gray-300">Exercise</p>
                    <h1 className="text-6xl font-oswald font-bold text-lime-300">0</h1>
                </div>
                <div className=" text-left space-y-2 w-800">
                    <p className="text-sm font-light text-gray-300">Exercise</p>
                    <h1 className="text-6xl font-oswald font-bold ">0</h1>
                </div>
                <div className=" text-left space-y-2 w-800">
                    <p className="text-sm font-light text-gray-300">Exercise</p>
                    <h1 className="text-6xl font-oswald font-bold ">0</h1>
                </div>
            </div>
            </div>

            <div>
                <div className="flex items-center  gap-10  py-2 mt-5 text-sm text-gray-600 bg-gray-700/20 w-80 justify-center rounded-xl  border border-gray-700  ">
                    <button onClick={()=> handleClickActive('TPlane')} className={isActive === "TPlane" ? "bg-gray-600/30 px-10 py-2 text-gray-400 rounded-[5px]   cursor-pointer" : "cursor-pointer"} >{`Today’s Plan`}</button>
                    <button onClick={()=> handleClickActive('saved')} className={isActive === "saved" ? "bg-gray-600/30 px-10 py-2 text-gray-400 rounded-[5px]   cursor-pointer" : "cursor-pointer"}>Saved</button>
                </div>
            </div>


            <div className="my-5 h-90 flex flex-col justify-center items-center  rounded-xl border border-gray-700  bg-gray-700/10 space-y-1">
                <h1 className="text-2xl font-oswald font-bold ">NOTHING HERE YET</h1>
                <p className="text-sm font-light  text-gray-400">Browse the library and add a lift to get today moving.</p>
                <Link href='' className="bg-lime-400 text-black px-8 py-2 rounded-full mt-4 font-semibold text-sm">Go to workouts</Link>
            </div>
        </div>
    );
};

export default MyPlanPage;