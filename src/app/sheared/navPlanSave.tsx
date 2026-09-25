'use client'

import Link from 'next/link';

import { useAddlist } from '../hook/Isaddedlist';

const NavPlanSave = () => {
    const {  planCount, saveCount } = useAddlist();
    return (
        <div className="flex justify-between items-center gap-5 text-sm text-gray-300">
              <Link href="/myPlan">
                <button className="cursor-pointer">Plan <h1>{planCount}</h1></button>
              </Link>
              <Link href="/myPlan">
                <button className="cursor-pointer">Saved <h1>{saveCount}</h1></button>
              </Link>
            </div>
    );
};

export default NavPlanSave;