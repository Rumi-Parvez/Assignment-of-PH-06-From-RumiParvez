"use client";

interface SortProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

const Sort = ({ sortBy, setSortBy }: SortProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
      <h1 className="text-sm text-gray-400">
        Sort By
      </h1>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-gray-700/30 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-sm outline-none cursor-pointer w-full sm:w-auto"
      >
        <option
          value="duration"
          className="bg-gray-900 text-white"
        >
          Duration
        </option>

        <option
          value="calories"
          className="bg-gray-900 text-white"
        >
          Calories
        </option>

        <option
          value="rating"
          className="bg-gray-900 text-white"
        >
          Rating
        </option>
      </select>
    </div>
  );
};

export default Sort;