import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const JobListings: React.FC = () => {
  const [jobData, setJobData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jobsphere-v4.onrender.com/api/v1/jobs', {
      headers: {
        'x-api-key': '9fbd769c8a2a4e0am6a26f47562620c2',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJobData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching job data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-12 h-12 border-2 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="flex flex-col justify-center items-center px-20 py-14 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1175px] max-md:max-w-full">
        <h2 className="self-center text-4xl leading-snug text-black rotate-[2.4492937051703357e-16rad]">
          Job Listings
        </h2>
        <div className="mt-9 w-full max-md:max-w-full">
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {jobData.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobListings;
