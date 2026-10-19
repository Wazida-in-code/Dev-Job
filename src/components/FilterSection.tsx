interface FilterSectionType {
  handleJobsData: (type: "all" | "frontend" | "backend" | "design") => void
}

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Design", value: "design" },
] as const

const FilterSection = ({handleJobsData}: FilterSectionType) => {
  
  return (
    <div className="container w-11/12 max-w-7xl py-10 sm:py-16 mx-auto">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Find your next developer role</h1>
      <p className="mt-2 text-sm sm:text-base text-base-content/70">
        Search, filter, and save the jobs you like - everything updates
        instantly
      </p>

      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-3 sm:gap-4 justify-center items-stretch lg:items-center py-6">
        <label className="input w-full lg:w-80">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search by the title or company"
          />
        </label>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleJobsData(option.value)}
              className="btn btn-neutral btn-sm sm:btn-md rounded-full flex-1 sm:flex-none"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
