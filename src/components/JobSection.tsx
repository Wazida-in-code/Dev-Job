import type { JobPromiseType } from "../JobsTypes";
import JobCard from "./JobCard";

type DataType = {
    data: JobPromiseType[]
}

const JobSection = ({data}:DataType) => {
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
                            
                            <JobCard item={item} />
                            
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
            </div>
        </div>
    );
};

export default JobSection;