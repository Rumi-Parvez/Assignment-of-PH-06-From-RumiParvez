import Image from "next/image";
import Link from "next/link";

import footerLogo from "@/assets/SVG.png";

const Footer = () => {
  return (
    <div className="bg-black border-t-2 border-gray-900">
      <div className="container mx-auto py-5 md:py-7 px-4 md:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div>
            <Link
              href="/"
              className="flex justify-between items-center gap-2"
            >
              <Image
                src={footerLogo}
                alt="Footer FITLOG Logo"
                width={20}
                height={20}
              />
              <h1 className="font-bold text-sm font-oswald">FITLOG</h1>
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-gray-400">
              © 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

