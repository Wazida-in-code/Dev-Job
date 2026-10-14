import React, { use } from 'react';
import Navbar from './Navbar';
import FilterSection from './FilterSection';
import JobSection from './JobSection';
import type { JobPromiseType } from '../JobsTypes';

type MainPromiseType = {
    jobsPromise : Promise<JobPromiseType[]>
}

const MainComponents = ({jobsPromise}:MainPromiseType) => {
    const data = use(jobsPromise);
    
    return (
        <>
            <Navbar />
            <FilterSection />
            <JobSection data={data} />
        </>
    );
};

export default MainComponents;