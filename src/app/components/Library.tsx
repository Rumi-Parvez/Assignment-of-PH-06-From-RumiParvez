import { getWorkoutData } from "../api/lib";
import LibraryCard from "./libraryCard";

const LibraryPage = async () => {
const LibraryData = await getWorkoutData();   

return (
        <>
        <div id="library">
            <div className="pt-20 mb-10 space-y-2">
                <h1 className="font-oswald text-3xl font-semibold">THE LIBRARY</h1>
                <p className="text-sm text-gray-300 font-light">Twelve lifts covering every major muscle group.</p>
            </div>


            <div className="grid grid-cols-3 gap-7">
                {
                    LibraryData.map((workout, ind:number) => <LibraryCard key={ind} workout={workout}></LibraryCard>)
                }
            </div>
        </div>

        </>
    );
};

export default LibraryPage;