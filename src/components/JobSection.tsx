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
        <div className='flex flex-col lg:flex-row container w-11/12 max-w-7xl mx-auto justify-between items-start gap-8 lg:gap-6'>
            {/* left side */}
            <div className='w-full lg:w-2/3 min-w-0'>
                <div className='flex items-center justify-between gap-4'>
                    <h2 className='text-xl sm:text-2xl font-bold'>Latest Jobs</h2>
                    <p className='text-sm sm:text-base text-slate-400 whitespace-nowrap'>{data.length} row found</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-4">
                    {
                        data.map(item => (
                            
                            <JobCard key={item.id} item={item} saveJobs={saveJobs} handleSaveJob={handleSaveJob} />
                            
                        ))
                    }
                </div>
            </div>

            {/* right side */}
            <div className='w-full lg:w-1/3 min-w-0'>
                <div className='flex items-center justify-between gap-4'>
                    <h2 className='text-xl sm:text-2xl font-bold'>Saved Jobs</h2>
                    <p className='text-sm sm:text-base text-slate-400 whitespace-nowrap'>{saveJobs.length} Saved</p>
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 mt-4">
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