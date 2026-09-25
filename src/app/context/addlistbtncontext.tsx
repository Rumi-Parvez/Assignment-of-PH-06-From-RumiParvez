'use client';

import React, { ReactNode, useState, createContext, SetStateAction, Dispatch } from "react";

import { IWorkoutData } from "../types/IData";

interface FitLogContextType {
  todaysPlan: IWorkoutData[];
  setTodaysPlan: Dispatch<SetStateAction<IWorkoutData[]>>;
  savedData: IWorkoutData[];
  setSavedData: Dispatch<SetStateAction<IWorkoutData[]>>;
  planCount : number
  setPlanCount: Dispatch<SetStateAction<number>>; 
  saveCount : number
  setSaveCount: Dispatch<SetStateAction<number>>; 
  isActive : string
  setIsActive : Dispatch<SetStateAction<string>>
  sortBy : string
  setSortBy : Dispatch<SetStateAction<string>>
}

export const IsAddedList = createContext<FitLogContextType | undefined>(undefined);

const AddListBtnContext = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<IWorkoutData[]>([]);
  const [savedData, setSavedData] = useState<IWorkoutData[]>([]);
  const [planCount , setPlanCount] = useState<number>(0)
  const [saveCount , setSaveCount] = useState<number>(0)
  const [isActive, setIsActive] = useState<string>("TPlane")
  const [sortBy, setSortBy] = useState("duration");
  

  return (
    <IsAddedList.Provider
      value={{
        isActive, setIsActive,
        todaysPlan,
        setTodaysPlan,
        savedData,
        setSavedData,
        planCount , setPlanCount,
        saveCount , setSaveCount,
        sortBy, setSortBy
        

      }}
    >
      {children}
    </IsAddedList.Provider>
  );
};

export default AddListBtnContext;