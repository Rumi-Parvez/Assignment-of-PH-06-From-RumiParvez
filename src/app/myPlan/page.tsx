"use client";

import MyPlanDataDaseboard from "../components/myPlanDataDaseboard";
import Saved from "../components/saved";
import SavedPlanDaseboard from "../components/savedPlanDaseboard";
import TodaysPlan from "../components/TodaysPlan";
import { useAddlist } from "../hook/Isaddedlist";

const MyPlanPage = () => {
  const {isActive, setIsActive} = useAddlist();

  const handleClickActive = (type: string) => {
    setIsActive(type);
  };

  return (
    <div className="my-10">
      <div>
        <h1 className="text-3xl font-oswald font-bold">MY PLAN </h1>
        <p className="text-sm text-gray-400 font-light mt-2">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {isActive === "TPlane" ? <MyPlanDataDaseboard></MyPlanDataDaseboard> : <SavedPlanDaseboard></SavedPlanDaseboard>}
      
      

      <div>
        <div className="flex items-center  gap-10  py-2 mt-5 text-sm text-gray-600 bg-gray-700/20 w-70 justify-center rounded-xl  border border-gray-700  ">
          <button
            onClick={() => handleClickActive("TPlane")}
            className={
              isActive === "TPlane"
                ? "btn   cursor-pointer"
                : "cursor-pointer"
            }>{`Today’s Plan`}</button>
          <button
            onClick={() => handleClickActive("saved")}
            className={
              isActive === "saved"
                ? "btn px-8 cursor-pointer"
                : "cursor-pointer"
            }>
            Saved
          </button>
        </div>
      </div>


     {isActive === "TPlane" ? <TodaysPlan /> : <Saved />}

      
    </div>
  );
};

export default MyPlanPage;
