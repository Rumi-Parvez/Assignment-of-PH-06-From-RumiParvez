"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavPlanSave from "../sheared/navPlanSave";
import logo from "@/assets/logo.png";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="sticky top-0 z-50 bg-black/95 border-b-2 border-gray-900">
        <div className="py-3 md:py-5 container mx-auto">
          <div className="flex justify-between items-center gap-3 px-4 md:px-6 lg:px-10 container mx-auto">
            <Link href="/" className="flex gap-2 items-center shrink-0">
              <Image
                src={logo}
                width={30}
                height={30}
                alt="FITOG Logo"
              />
              <h1 className="font-bold text-lg md:text-xl font-oswald">
                FITLOG
              </h1>
            </Link>

            <div>
              <ul className="flex justify-between items-center gap-2 md:gap-5 text-xs md:text-sm text-gray-300">
                <li>
                  <Link
                    href="/"
                    className={
                      pathname === "/"
                        ? "text-lime-400 bg-lime-500/30 py-2 px-3 md:px-5 rounded-full font-semibold"
                        : ""
                    }
                  >
                    Workouts
                  </Link>
                </li>

                <li>
                  <Link
                    href="/myPlan"
                    className={
                      pathname === "/myPlan"
                        ? "text-lime-400 bg-lime-500/30 py-2 px-3 md:px-5 rounded-full font-semibold"
                        : ""
                    }
                  >
                    My Plan
                  </Link>
                </li>
              </ul>
            </div>

            <NavPlanSave />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

