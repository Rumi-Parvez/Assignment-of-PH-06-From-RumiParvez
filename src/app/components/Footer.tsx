import Image from "next/image";
import Link from "next/link";

import  footerLogo from "@/assets/SVG.png"

const Footer = () => {
    return (
        <div className="bg-black border-t-2 border-gray-900">
            <div className="container mx-auto py-7">
            <div className="flex justify-between items-center ">
                <div >
                    <Link href="/" className="flex justify-between items-center gap-2">
                    <Image src={footerLogo} alt="Footer FITLOG Logo" width={20} height={20}></Image>
                    <h1 className="font-bold text-sm ">FITLOG</h1>
                    </Link>
                </div>

                <div>
                    <p className="text-xs text-gray-400">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;