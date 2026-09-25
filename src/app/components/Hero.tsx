import Image from "next/image";
import Link from "next/link";

import Heroimg from "@/assets/banner.png";

const HeroPage = () => {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row justify-between bg-gray-700/20 rounded-2xl">
          <div className="w-full md:w-[50%] px-5 md:px-10 lg:px-20 py-10 md:py-14 lg:py-20 space-y-5 md:space-y-6 m-auto">
            <p className="text-xs text-lime-300">WORKOUT LIBRARY</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="text-sm text-gray-400 font-light w-full md:w-110">
              {`FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.`}
            </p>

            <button className="bg-lime-400 text-black font-semibold text-xs px-7 py-3 rounded-[3px] cursor-pointer">
              <Link href="#library">BROWSE WORKOUTS</Link>
            </button>
          </div>

          <div className="w-full md:w-[50%] p-5 md:p-10 lg:p-20">
            <Image
              src={Heroimg}
              width={350}
              height={350}
              alt="Hero Image"
              className="flex items-center justify-center w-full max-w-[350px] m-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;

