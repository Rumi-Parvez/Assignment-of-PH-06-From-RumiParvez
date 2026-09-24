"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo.png"

const NavBar = () => {
    
 const pathname = usePathname();

    return (
       <>
       
       <div className="sticky top-0 z-50  bg-black/80 border-b-2 border-gray-900">
        <div className=" py-5 container mx-auto">
            <div className="flex  justify-between items-center">
                
                   <Link href="/" className="flex gap-2 items-center" >
                    <Image src={logo} width={30} height={30} alt="FITOG Logo">

                    </Image>
                    <h1 className="font-bold text-xl   font-oswald">FITLOG</h1></Link>
              

                <div >
                    <ul className="flex justify-between items-center gap-5 text-sm text-gray-300">
                        <li  ><Link href="/" className={ pathname === "/" ?  "text-lime-400 bg-lime-500/30 py-2 px-5 rounded-full font-semibold":"" }>Workouts</Link></li>
                        <li ><Link href="/myPlan" className={pathname === "/myPlan" ? "text-lime-400 bg-lime-500/30 py-2 px-5 rounded-full font-semibold" : ""} >My Plan</Link></li>
                    </ul>
                </div>

                <div className="flex justify-between items-center gap-5 text-sm text-gray-300">
                    <Link href="/myPlan" ><button className="cursor-pointer">Plan</button></Link>
                    <Link href="/myPlan" ><button className="cursor-pointer">Saved</button></Link>
                </div>
            </div>
       </div>
       </div>

       </>
    );
};

export default NavBar;