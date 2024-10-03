import React from 'react';
import JobCard from './JobCard';

const jobData = [
  {
    title: "Software Engineer",
    type: "Remote, Full-Time",
    location: "San Francisco",
    salary: "$120k/year",
    postedDays: 3,
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/47ce063b80a03e93be956d3888423b13f0c645e8a630a47c40f5cb561110264c?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
  },
  {
    title: "Data Analyst",
    type: "Remote, Contract",
    location: "New York",
    salary: "$90k/year",
    postedDays: 2,
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/251843eda5c746c8ccbe8393deb7fa75f013cc17c81a64bd0fa83aa3329f83b6?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
  },
  {
    title: "Security Analyst",
    type: "Remote, Full-Time",
    location: "Dallas",
    salary: "$105k/year",
    postedDays: 1,
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/efd1740275ddf686b4cfe2bb1bf01586b75916409182c851edcc5c805cc5b922?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
  }
];

const HighDemandJobs: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-14 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1175px] max-md:max-w-full">
        <h2 className="self-center text-4xl leading-snug text-black rotate-[2.4492937051703357e-16rad]">
          High Demand Jobs
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
};

export default HighDemandJobs;