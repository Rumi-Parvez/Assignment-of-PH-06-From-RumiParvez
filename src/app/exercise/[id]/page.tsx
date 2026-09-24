import Image from "next/image";
import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa";
import { RiFolderAddLine } from "react-icons/ri";

import { IWorkoutData } from "@/app/types/IData";

interface ParamiterProps {
  params: Promise<{
    id: string;
  }>;
}
const DetailsPage = async ({ params }: ParamiterProps) => {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data: IWorkoutData = await res.json();
  return (
    <div className="flex justify-center items-center">
        <div className=" flex  my-10  gap-20  ">
      <div className="">
        <Image
          src={data.image}
          width={500}
          height={500}
          alt={`img ${data.name}`}
          className="h-200 w-180 rounded-2xl object-cover"></Image>
      </div>
      <div className="space-y-6">
        <h1 className="font-oswald font-bold text-4xl">{data.name}</h1>
        <p className="text-sm text-gray-400 font-light">{data.description}</p>
        <div className="flex items-center gap-5 mb-8">
          <span className="bg-lime-400 text-black text-sm font-semibold px-4 py-0.5 rounded-full ">
            {data.muscleGroups[0]}
          </span>
          {
                data.muscleGroups.length > 1 ? <span className="bg-lime-400 text-black text-sm font-semibold px-4 py-0.5 rounded-full ">{data.muscleGroups[1]}</span> : ""
              }
        </div>
        <div className="bg-gray-700/20 w-full pt-4   rounded-xl border border-gray-700 space-y-5 ">
          <div className="flex justify-between items-center border-b border-gray-700  pb-4  px-8 ">
            <p className="text-xs text-gray-400  ">EQUIPMENT</p>
            <p className="text-xs font-light">{data.equipment}</p>
          </div>

          <div className="flex justify-between items-center border-b border-gray-700  pb-4  px-8 ">
            <p className="text-xs text-gray-400  ">DIFFICULTY</p>
            <p className="text-xs font-light">{data.difficulty}</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700  pb-4  px-8 ">
            <p className="text-xs text-gray-400  ">SETS</p>
            <p className="text-xs font-light">{data.sets}</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700  pb-4  px-8 ">
            <p className="text-xs text-gray-400  ">REPS</p>
            <p className="text-xs font-light">{data.reps}</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700  pb-4  px-8 ">
            <p className="text-xs text-gray-400  ">DURATION</p>
            <p className="text-xs font-light">{data.duration} min</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700  pb-4  px-8 ">
            <p className="text-xs text-gray-400  ">CALORIES</p>
            <p className="text-xs font-light">{data.caloriesBurned} kcal</p>
          </div>
          <div className="flex justify-between items-center   pb-4  px-8 ">
            <p className="text-xs text-gray-400  ">RATING</p>
            <p className="text-xs font-light">{data.rating}</p>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-bold">INSTRUCTIONS</h1>
          <p className="text-sm text-gray-300 font-light">
            1. {data.instructions[0]}
          </p>
          <p className="text-sm text-gray-300 font-light">
            2. {data.instructions[1]}
          </p>
          <p className="text-sm text-gray-300 font-light">
            3. {data.instructions[2]}
          </p>
          <p className="text-sm text-gray-300 font-light">
            4. {data.instructions[3]}
          </p>
        </div>



        <div className="flex items-center gap-5">

            <Link href='' ><button className="flex justify-between items-center gap-3 bg-lime-400 text-black px-7  py-2 rounded-xl text-xs font-bold cursor-pointer"><RiFolderAddLine className="text-xl" />
 {`Add to today's plan`}</button></Link>
            
            <Link href='' ><button className="flex justify-between items-center text-xs border border-gray-700 p-10 py-2 rounded-xl gap-3 cursor-pointer"><FaRegBookmark />
 Save for later</button></Link>

        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailsPage;
