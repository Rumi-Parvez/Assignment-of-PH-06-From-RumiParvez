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
    <div className="flex justify-between items-center gap-3 md:gap-5 text-xs md:text-sm text-gray-300 shrink-0">
      <Link href="/myPlan">
        <button
          className="cursor-pointer flex justify-between items-center gap-1.5 md:gap-2 whitespace-nowrap"
          onClick={() => handleClickPlanActive("TPlane")}
        >
          Plan

          <h1 className="bg-lime-400 px-1.5 md:px-2 py-0.5 rounded-full text-black min-w-5 md:min-w-6 text-center">
            {planCount}
          </h1>
        </button>
      </Link>

      <Link href="/myPlan">
        <button
          className="cursor-pointer flex justify-between items-center gap-1.5 md:gap-2 whitespace-nowrap"
          onClick={() => handleClickSaveActive("saved")}
        >
          Saved

          <h1 className="border border-gray-700 px-1.5 md:px-2 py-0.5 rounded-full min-w-5 md:min-w-6 text-center">
            {saveCount}
          </h1>
        </button>
      </Link>
    </div>
  );
};

export default NavPlanSave;