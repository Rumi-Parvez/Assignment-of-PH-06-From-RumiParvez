import { IWorkoutData } from "../types/IData";

export const  getWorkoutData = async (): Promise<IWorkoutData[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
     if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }
  
    return res.json();

}