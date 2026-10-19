import React, { use, useState } from 'react';
import Navbar from './Navbar';
import FilterSection from './FilterSection';
import JobSection from './JobSection';
import type { JobPromiseType } from '../JobsTypes';

type MainPromiseType = {
    jobsPromise : Promise<JobPromiseType[]>
}

const MainComponents = ({jobsPromise}:MainPromiseType) => {
    const data = use(jobsPromise);
    const [saveJobs, setSaveJobs] = useState<JobPromiseType[]>([])
    
    return (
        <>
            <Navbar />
            <FilterSection />
            <JobSection data={data} saveJobs={saveJobs} setSaveJobs={setSaveJobs} />
        </>
    );
};

export default MainComponents;