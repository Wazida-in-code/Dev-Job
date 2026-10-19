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
    console.log(saveJobs);
    return (
        <div className='flex container w-11/12 mx-auto justify-between gap-6'>
            {/* left side */}
            <div className='w-2/3'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-bold'>Latest Jobs</h2>
                    <p className='text-slate-400'>6 row found</p>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    {
                        data.map(item => (
                            
                            <JobCard key={item.id} item={item} handleSaveJob={handleSaveJob} />
                            
                        ))
                    }
                </div>
            </div>

            {/* right side */}
            <div className='w-1/3'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-bold'>Saved Jobs</h2>
                    <p className='text-slate-400'>6 Saved</p>
                </div>
                 <div className="space-y-2">
                    {
                        saveJobs.map(job => 
                            <SaveJobCard job={job} />
                        )
                    }
                 </div>
            </div>
        </div>
    );
};

export default JobSection;