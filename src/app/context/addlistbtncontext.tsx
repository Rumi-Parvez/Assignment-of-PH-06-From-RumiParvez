'use client';

import React, { ReactNode, useState, createContext, SetStateAction } from "react";

import { IWorkoutData } from "../types/IData";

interface FitLogContextType {
  todaysPlan: IWorkoutData[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<IWorkoutData[]>>;
  savedData: IWorkoutData[];
  setSavedData: React.Dispatch<React.SetStateAction<IWorkoutData[]>>;
  planCount : number
  setPlanCount: React.Dispatch<SetStateAction<number>>; 
  saveCount : number
  setSaveCount: React.Dispatch<SetStateAction<number>>; 
}

export const IsAddedList = createContext<FitLogContextType | undefined>(undefined);

const AddListBtnContext = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<IWorkoutData[]>([]);
  const [savedData, setSavedData] = useState<IWorkoutData[]>([]);
  const [planCount , setPlanCount] = useState<number>(0)
  const [saveCount , setSaveCount] = useState<number>(0)

  return (
    <IsAddedList.Provider
      value={{
        todaysPlan,
        setTodaysPlan,
        savedData,
        setSavedData,
        planCount , setPlanCount,
        saveCount , setSaveCount,

      }}
    >
      {children}
    </IsAddedList.Provider>
  );
};

export default AddListBtnContext;