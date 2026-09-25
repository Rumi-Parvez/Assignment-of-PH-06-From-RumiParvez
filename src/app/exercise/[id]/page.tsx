import Image from "next/image";

import WorkoutAction from "@/app/sheared/workoutAction";
import { IWorkoutData } from "@/app/types/IData";

interface ParamiterProps {
  params: Promise<{
    id: string;
  }>;
}

const DetailsPage = async ({ params }: ParamiterProps) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (!res.ok) {
    return (
      <div className="flex justify-center items-center min-h-100">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold">
            Workout Not Found
          </h1>

          <p className="text-gray-400">
            No workout found with ID: {id}
          </p>
        </div>
      </div>
    );
  }

  const data: IWorkoutData = await res.json();

  if (!data || !data.id) {
    return (
      <div className="flex justify-center items-center min-h-100">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold">
            Workout Not Found
          </h1>

          <p className="text-gray-400">
            This workout data is unavailable.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col lg:flex-row my-6 md:my-8 lg:my-10 gap-8 md:gap-12 lg:gap-20 w-full">
        <div className="w-full lg:w-auto">
          <Image
            src={data.image}
            width={500}
            height={500}
            alt={`img ${data.name}`}
            className="h-100 md:h-140 lg:h-200 w-full lg:w-350 rounded-2xl object-cover"
          />
        </div>

        <div className="space-y-6 w-full">
          <h1 className="font-oswald font-bold text-3xl md:text-4xl">
            {data.name}
          </h1>

          <p className="text-sm text-gray-400 font-light">
            {data.description}
          </p>

          <div className="flex flex-wrap items-center gap-2 md:gap-5 mb-8">
            {data.muscleGroups?.map((muscle) => (
              <span
                key={muscle}
                className="bg-lime-400 text-black text-sm font-semibold px-4 py-0.5 rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="bg-gray-700/20 w-full pt-4 rounded-xl border border-gray-700 space-y-5">
            <div className="flex justify-between items-center border-b border-gray-700 pb-4 px-4 md:px-8 gap-4">
              <p className="text-xs text-gray-400">
                EQUIPMENT
              </p>
              <p className="text-xs font-light text-right">
                {data.equipment}
              </p>
            </div>

            <div className="flex justify-between items-center border-b border-gray-700 pb-4 px-4 md:px-8 gap-4">
              <p className="text-xs text-gray-400">
                DIFFICULTY
              </p>
              <p className="text-xs font-light text-right">
                {data.difficulty}
              </p>
            </div>

            <div className="flex justify-between items-center border-b border-gray-700 pb-4 px-4 md:px-8 gap-4">
              <p className="text-xs text-gray-400">
                SETS
              </p>
              <p className="text-xs font-light text-right">
                {data.sets}
              </p>
            </div>

            <div className="flex justify-between items-center border-b border-gray-700 pb-4 px-4 md:px-8 gap-4">
              <p className="text-xs text-gray-400">
                REPS
              </p>
              <p className="text-xs font-light text-right">
                {data.reps}
              </p>
            </div>

            <div className="flex justify-between items-center border-b border-gray-700 pb-4 px-4 md:px-8 gap-4">
              <p className="text-xs text-gray-400">
                DURATION
              </p>
              <p className="text-xs font-light text-right">
                {data.duration} min
              </p>
            </div>

            <div className="flex justify-between items-center border-b border-gray-700 pb-4 px-4 md:px-8 gap-4">
              <p className="text-xs text-gray-400">
                CALORIES
              </p>
              <p className="text-xs font-light text-right">
                {data.caloriesBurned} kcal
              </p>
            </div>

            <div className="flex justify-between items-center pb-4 px-4 md:px-8 gap-4">
              <p className="text-xs text-gray-400">
                RATING
              </p>
              <p className="text-xs font-light text-right">
                {data.rating}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-bold">
              INSTRUCTIONS
            </h1>

            <ul className="text-sm text-gray-300 font-light space-y-3">
              {data.instructions?.map(
                (instruction, index) => (
                  <li key={index}>
                    {index + 1}. {instruction}
                  </li>
                )
              )}
            </ul>
          </div>

          <WorkoutAction data={data} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;