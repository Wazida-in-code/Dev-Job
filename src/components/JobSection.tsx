import type { JobPromiseType } from "../JobsTypes";
import JobCard from "./JobCard";
import SaveJobCard from "./SaveJobCard";

type DataType = {
    data: JobPromiseType[]
    saveJobs: JobPromiseType[]
    setSaveJobs: React.Dispatch<React.SetStateAction<JobPromiseType[]>>
}

const JobSection = ({data, saveJobs, setSaveJobs}:DataType) => {
    const handleSaveJob = (job: JobPromiseType) => {

        const filterdJob = saveJobs.filter(elme => elme.id !== job.id)
        const updateSaveJob = [...filterdJob, job]
        setSaveJobs(updateSaveJob)
    }

    const handleRemoveJob = (job: JobPromiseType) => {
        const filterJobs = saveJobs.filter(el => el.id !== job.id);
        setSaveJobs(filterJobs)
        
    }
   
    return (
        <div className='flex container w-11/12 mx-auto justify-between gap-6'>
            {/* left side */}
            <div className='w-2/3'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-bold'>Latest Jobs</h2>
                    <p className='text-slate-400'>{data.length} row found</p>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    {
                        data.map(item => (
                            
                            <JobCard key={item.id} item={item} saveJobs={saveJobs} handleSaveJob={handleSaveJob} />
                            
                        ))
                    }
                </div>
            </div>

            {/* right side */}
            <div className='w-1/3'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-bold'>Saved Jobs</h2>
                    <p className='text-slate-400'>{saveJobs.length} Saved</p>
                </div>
                 <div className="space-y-2">
                    {
                        saveJobs.map(job => 
                            <SaveJobCard key={job.id} job={job} handleRemoveJob={handleRemoveJob} />
                        )
                    }
                 </div>
            </div>
        </div>
    );
};

export default JobSection;