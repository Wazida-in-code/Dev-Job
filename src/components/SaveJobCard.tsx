import type { JobPromiseType } from "../JobsTypes";

interface SaveJobType {
  job: JobPromiseType;
  handleRemoveJob: (job:JobPromiseType) => void
}

const SaveJobCard = ({ job, handleRemoveJob }: SaveJobType) => {
  return (
    <div className="card bg-base-100 card-sm shadow-sm p-4 sm:p-6">
      <div className="min-w-0">
        <div className="flex justify-between items-start w-full gap-4">
          <div className="min-w-0">
            <h2 className="mb-4 font-semibold break-words">{job.title}</h2>
            <p className="text-sm text-base-content/70 break-words">{job.location}</p>
          </div>
        </div>

        <button onClick={() => handleRemoveJob(job)} className="btn btn-outline btn-secondary mt-5 w-full">Remove</button>
      </div>
    </div>
  );
};

export default SaveJobCard;
