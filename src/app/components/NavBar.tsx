import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png"

const NavBar = () => {
    return (
       <>
       
       <div className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b-2 border-gray-900">
        <div className=" py-5 container mx-auto">
            <div className="flex  justify-between items-center">
                
                   <Link href="/" className="flex gap-2 items-center" >
                    <Image src={logo} width={30} height={30} alt="FITOG Logo">

                    </Image>
                    <h1 className="font-bold text-xl  ">FITLOG</h1></Link>
              

                <div >
                    <ul className="flex justify-between items-center gap-5 text-sm text-gray-300">
                        <li><Link href="/workouts">Workouts</Link></li>
                        <li><Link href="/myPlan">My Plan</Link></li>
                    </ul>
                </div>

                <div className="flex justify-between items-center gap-5 text-sm text-gray-300">
                    <Link href="" ><button className="cursor-pointer">Plan</button></Link>
                    <Link href="" ><button className="cursor-pointer">Saved</button></Link>
                </div>
            </div>
       </div>
       </div>

       </>
    );
};

export default NavBar;