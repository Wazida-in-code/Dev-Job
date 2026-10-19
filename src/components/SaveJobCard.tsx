import React from "react";
import type { JobPromiseType } from "../JobsTypes";

interface SaveJobType {
  job: JobPromiseType;
}

const SaveJobCard = ({ job }: SaveJobType) => {
  return (
    <div className="card bg-base-100 card-sm shadow-sm mb-5 p-6">
      <div className="">
        <div className="flex justify-between items-start w-full gap-4">
          <div>
            <h2 className="mb-4">{job.title}</h2>
            <p>{job.location}</p>
          </div>
        </div>

        <button className="btn btn-outline btn-secondary mt-5 w-full">Remove</button>
      </div>
    </div>
  );
};

export default SaveJobCard;
