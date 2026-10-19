import type { JobPromiseType } from "../JobsTypes";

type ItemType = {
    item: JobPromiseType
    handleSaveJob: (job: JobPromiseType) => void
}

const JobCard = ({item, handleSaveJob}:ItemType) => {
  return (
    <div className="card bg-base-100 card-sm shadow-sm mb-5 p-6">
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
          <button onClick={() => handleSaveJob(item)} className="btn btn-primary">Saved</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
