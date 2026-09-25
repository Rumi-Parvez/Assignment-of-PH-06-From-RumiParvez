'use client'

import Link from 'next/link';

import { useAddlist } from '../hook/Isaddedlist';

const NavPlanSave = () => {
    const { setPlanCount  , setSaveCount} = useAddlist();
    return (
        <div className="flex justify-between items-center gap-5 text-sm text-gray-300">
              <Link href="/myPlan">
                <button className="cursor-pointer">Plan <h1>{setPlanCount.length}</h1></button>
              </Link>
              <Link href="/myPlan">
                <button className="cursor-pointer">Saved <h1>{setSaveCount.length}</h1></button>
              </Link>
            </div>
    );
};

export default NavPlanSave;