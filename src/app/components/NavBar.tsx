"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

import { useSession } from "../../lib/auth-client"
import NavPlanSave from "../sheared/navPlanSave";
import logo from "@/assets/logo.png";

const NavBar = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
const { data: session } = useSession();



  return (
    <>
      <div className="sticky top-0 z-50 bg-black/95 border-b-2 border-gray-900">
        <div className="py-3 md:py-5 container mx-auto">
          <div className="flex justify-between items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 lg:px-10 container mx-auto">

            <Link
              href="/"
              className="flex gap-1.5 md:gap-2 items-center "
            >
              <Image
                src={logo}
                width={30}
                height={30}
                alt="FITOG Logo"
                className="w-7 h-7 md:w-8 md:h-8"
              />

              <h1 className="font-bold text-base sm:text-lg md:text-xl font-oswald">
                FITLOG
              </h1>
            </Link>

            <div className="flex justify-between items-center gap-20">
              <div className="hidden md:block shrink-0">
              <ul className="flex justify-center items-center gap-1 sm:gap-2 md:gap-5 text-[11px] sm:text-xs md:text-sm text-gray-300">

                <li>
                  <Link
                    href="/"
                    className={
                      pathname === "/"
                        ? "text-lime-400 bg-lime-500/30 py-2 px-2 sm:px-3 md:px-5 rounded-full font-semibold whitespace-nowrap"
                        : "py-2 px-2 sm:px-3 md:px-0 whitespace-nowrap"
                    }
                  >
                    Workouts
                  </Link>
                </li>

                {
                  session?.user && <><li>
                  <Link
                    href="/my-plan"
                    className={
                      pathname === "/my-plan"
                        ? "text-lime-400 bg-lime-500/30 py-2 px-2 sm:px-3 md:px-5 rounded-full font-semibold whitespace-nowrap"
                        : "py-2 px-2 sm:px-3 md:px-0 whitespace-nowrap"
                    }
                  >
                    My Plan
                  </Link>
                </li></>
                }

              </ul>
                
            </div>
            {
              session?.user && <><div className="flex items-center gap-3 md:gap-5">
                  <NavPlanSave />
            </div></>
            }
            </div>

            

            <div className="flex flex-row items-center gap-3 md:gap-5">
              <div className="flex gap-3 items-center">
              <Link href='/log-in'><button className="cursor-pointer text-sm font-bold border border-gray-700 bg-gray-900 rounded-full py-2 px-6">Login</button></Link>
              <Link href='/sign-up'><button className="cursor-pointer bg-lime-300 text-lime-800 text-sm font-bold rounded-full py-2 px-7">Sign Up</button></Link>
            </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-2xl text-gray-200 cursor-pointer"
              >
                {isMenuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>

          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-800 mt-3 px-4 pt-4 pb-2">
              <ul className="flex flex-col items-center gap-3 text-sm text-gray-300">

                <li>
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className={
                      pathname === "/"
                        ? "block text-lime-400 bg-lime-500/30 py-2 px-6 rounded-full font-semibold"
                        : "block py-2 px-6"
                    }
                  >
                    Workouts
                  </Link>
                </li>

                <li>
                  <Link
                    href="/my-plan"
                    onClick={() => setIsMenuOpen(false)}
                    className={
                      pathname === "/my-plan"
                        ? "block text-lime-400 bg-lime-500/30 py-2 px-6 rounded-full font-semibold"
                        : "block py-2 px-6"
                    }
                  >
                    My Plan
                  </Link>
                </li>

              </ul>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default NavBar;