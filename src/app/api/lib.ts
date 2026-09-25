import { IWorkoutData } from "../types/IData";

export const  getWorkoutData = async (): Promise<IWorkoutData[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`)
     if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }
  
    return res.json();

}