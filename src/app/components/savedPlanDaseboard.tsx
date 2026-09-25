import { useAddlist } from "../hook/Isaddedlist";
import { IWorkoutData } from "../types/IData";

const SavedPlanDaseboard = () => {
    const {savedData } = useAddlist();
    
      const totalExercises = savedData.length;
    
      const totalDuration = savedData.reduce(
        (total : number, workout: IWorkoutData) => total + workout.duration,
        0
      );
    
      const totalCalories = savedData.reduce(
        (total : number, workout: IWorkoutData) => total + workout.caloriesBurned,
        0
      );
        return (
            <div>
                
                        <div className="bg-gray-700/20 rounded-2xl  border border-gray-700 mt-8">
            <div className="flex justify-center  items-center gap-3 my-10  px-15 py-  ">
              <div className=" text-left space-y-2 w-800">
                <p className="text-sm font-light text-gray-300">Exercise</p>
                <h1 className="text-6xl font-oswald font-bold text-lime-300">{totalExercises}</h1>
              </div>
              <div className=" text-left space-y-2 w-800">
                <p className="text-sm font-light text-gray-300">Minutes</p>
                <h1 className="text-6xl font-oswald font-bold ">{totalDuration}</h1>
              </div>
              <div className=" text-left space-y-2 w-800">
                <p className="text-sm font-light text-gray-300">Calories</p>
                <h1 className="text-6xl font-oswald font-bold ">{totalCalories}</h1>
              </div>
            </div>
          </div>
                        
            </div>
            
        );
};

export default SavedPlanDaseboard;