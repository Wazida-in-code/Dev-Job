const FilterSection = () => {
  return (
    <div className="container w-11/12 py-16 mx-auto">
      <h1 className="text-2xl font-bold">Find your next developer role</h1>
      <p>
        Search, filter, and save the jobs you like - everything updates
        instantly
      </p>

      <div className="flex gap-5 justify-center items-center py-6">
        <label className="input">
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
        <button className="btn btn-neutral rounded-full mr-2">All</button>
        <button className="btn btn-neutral rounded-full mr-2">Frontend</button>
        <button className="btn btn-neutral rounded-full mr-2">Backend</button>
        <button className="btn btn-neutral rounded-full mr-2">Design</button>
      </div>
    </div>
  );
};

export default FilterSection;
