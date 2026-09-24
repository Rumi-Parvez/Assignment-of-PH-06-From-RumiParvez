import { IWorkoutData } from "../types/IData";

export const  getWorkoutData = async (): Promise<IWorkoutData[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return res.json();

}