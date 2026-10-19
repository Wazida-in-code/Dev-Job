import { use, useState } from 'react';
import Navbar from './Navbar';
import FilterSection from './FilterSection';
import JobSection from './JobSection';
import type { JobPromiseType } from '../JobsTypes';

type MainPromiseType = {
    jobsPromise : Promise<JobPromiseType[]>
}

const MainComponents = ({jobsPromise}:MainPromiseType) => {
    const data = use(jobsPromise);
    const [jobsData, setJobsData] = useState(data)
    const [saveJobs, setSaveJobs] = useState<JobPromiseType[]>([])
    
    const handleJobsData = (type: "all" | "frontend" | "backend" | "design") => {
        if (type === "frontend"){
            const frontendJob = data.filter((el) => el.field.toLowerCase() === 'frontend');
            setJobsData(frontendJob)
        }
        else if (type === "backend"){
            const backendJob = data.filter(el => el.field.toLowerCase() === 'backend')
            setJobsData(backendJob);
        }
        else if (type === "design"){
            const designJob = data.filter(el => el.field.toLowerCase() === 'design')
            setJobsData(designJob)
        }
        else{
            setJobsData(data)
        }
    }

    return (
        <>
            <Navbar saveJobs={saveJobs} />
            <FilterSection handleJobsData={handleJobsData} />
            <JobSection data={jobsData} saveJobs={saveJobs} setSaveJobs={setSaveJobs} />
        </>
    );
};

export default MainComponents;