"use client";

import Link from "next/link";

import { useAddlist } from "../hook/Isaddedlist";

const NavPlanSave = () => {
  const { planCount, saveCount, setIsActive } = useAddlist();

  const handleClickSaveActive = (type: "saved") => {
    setIsActive(type);
  };

  const handleClickPlanActive = (type: "TPlane") => {
    setIsActive(type);
  };

  return (
    <div className="flex justify-between items-center gap-5 text-sm text-gray-300">
      
      <Link href="/myPlan">
        <button className="cursor-pointer flex justify-between items-center gap-2">
          Plan
          <h1
            className="bg-lime-400 px-2 py-0.5 rounded-full text-black"
            onClick={() => handleClickPlanActive("TPlane")}
          >
            {planCount}
          </h1>
        </button>
      </Link>

      <Link href="/myPlan">
        <button
          className="cursor-pointer flex justify-between items-center gap-2"
          onClick={() => handleClickSaveActive("saved")}
        >
          Saved
          <h1 className="border border-gray-700 px-2 py-0.5 rounded-full">
            {saveCount}
          </h1>
        </button>
      </Link>

    </div>
  );
};

export default NavPlanSave;