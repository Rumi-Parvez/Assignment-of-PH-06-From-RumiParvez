'use client'

import Link from 'next/link';

import { useAddlist } from '../hook/Isaddedlist';

const NavPlanSave = () => {
    const {  planCount, saveCount } = useAddlist();
    return (
        <div className="flex justify-between items-center gap-5 text-sm text-gray-300">
              <Link href="/myPlan">
                <button className="cursor-pointer flex justify-between items-center gap-1">Plan <h1 className='bg-lime-400 px-2  rounded-full text-black'>{planCount}</h1></button>
              </Link>
              <Link href="/myPlan">
                <button className="cursor-pointer flex justify-between items-center gap-1">Saved <h1>{saveCount}</h1></button>
              </Link>
            </div>
    );
};

export default NavPlanSave;