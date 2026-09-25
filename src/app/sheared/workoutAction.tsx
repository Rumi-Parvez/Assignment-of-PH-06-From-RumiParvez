'use client'

import { FaRegBookmark } from "react-icons/fa";
import { RiFolderAddLine } from "react-icons/ri";
import { toast } from "react-toastify";

import { useAddlist } from "../hook/Isaddedlist";
import { IWorkoutData } from "../types/IData";

const WorkoutAction = ({data}:{data:IWorkoutData}) => {
  const {
    todaysPlan, setTodaysPlan,
    planCount,
    setPlanCount,
    savedData, setSavedData,
    saveCount,
    setSaveCount,

  } = useAddlist();

  const handleClicktodaysplan = () => {
    setTodaysPlan([...todaysPlan , data] )
 
    
    setPlanCount(planCount+1);
    toast.success(`${data.name} Workout added to today's plan!`)
    
  };

  const handleClickSaved = () => {
    setSavedData([...savedData , data])
    setSaveCount(saveCount+1);
    toast.success(`${data.name} Workout saved for later!`)
  };

  return (
    <div className="flex items-center gap-5">

      <button
        onClick={handleClicktodaysplan}
        className="flex justify-between items-center gap-3 bg-lime-400 text-black px-7 py-2 rounded-xl text-xs font-bold cursor-pointer"
      >
        <RiFolderAddLine className="text-xl" />
        {`Add to today's plan`}
      </button>

      <button
        onClick={handleClickSaved}
        className="flex justify-between items-center text-xs border border-gray-700 p-10 py-2 rounded-xl gap-3 cursor-pointer"
      >
        <FaRegBookmark />
        Save for later
      </button>

    </div>
  );
};

export default WorkoutAction;