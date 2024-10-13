import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const JobListings: React.FC = () => {
  const [jobData, setJobData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredJobs = jobData.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {/* Header and Search Bar Container */}
        <div className="flex justify-between items-center w-full mb-5">
          {/* Heading hidden on smaller screens */}
          <h2 className="text-4xl leading-snug text-black max-md:hidden">
            Job Listings
          </h2>
          {/* Search Bar */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search jobs..."
            className="w-1/3 max-md:w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Job Cards */}
        <div className="w-full mt-9 max-md:max-w-full">
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {filteredJobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
