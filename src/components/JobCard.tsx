import { FaBookmark } from "react-icons/fa";
import type { JobPromiseType } from "../JobsTypes";

type ItemType = {
    item: JobPromiseType
    saveJobs: JobPromiseType[]
    handleSaveJob: (job: JobPromiseType) => void
}

const JobCard = ({item, saveJobs , handleSaveJob}:ItemType) => {
  const isSaved = saveJobs.some(el => el.id === item.id)
  return (
    <div className={`card bg-base-100 card-sm shadow-sm p-4 sm:p-6 ${isSaved === true ? "border-2 border-amber-700" : ""}`}>
      <div className="min-w-0">
       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-1 sm:gap-4">
         <div className="min-w-0">
            <h2 className="font-semibold break-words">{item.title}</h2>
            <p className="text-sm text-base-content/70 break-words">{item.location}</p>
        </div>
        <p className="text-sm whitespace-nowrap">{item.jobType}</p>
       </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-4 sm:py-5">
          <p className="font-bold">{item.salaryRange}</p>
          <button onClick={() => handleSaveJob(item)} className={`btn w-full sm:w-auto ${isSaved === true? "btn-success" : "btn-primary"}`}>Saved <FaBookmark /></button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
