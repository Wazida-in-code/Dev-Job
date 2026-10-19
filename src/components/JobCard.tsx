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
    <div className={`card bg-base-100 card-sm shadow-sm mb-5 p-6 ${isSaved === true ? "border-2 border-amber-700" : ""}`}>
      <div className="">
       <div className="flex justify-between items-start w-full gap-4">
         <div>
            <h2>{item.title}</h2>
            <p>{item.location}</p>
        </div>
        <p>{item.jobType}</p>
       </div>
        <div className="flex justify-between items-center py-5">
          <p className="font-bold">{item.salaryRange}</p>
          <button onClick={() => handleSaveJob(item)} className={`btn ${isSaved === true? "btn-success" : "btn-primary"}`}>Saved <FaBookmark /></button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
