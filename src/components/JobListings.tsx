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
    title: "Project Manager",
    type: "On-site, Full-Time",
    location: "Seattle",
    salary: "$110k/year",
    postedDays: 5,
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cf692f90694d9ad7b6a9e1ef2dd859c55ae4e843d9f4cebc464d85ea53248c0?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
  },
  {
    title: "UI/UX Designer",
    type: "Remote, Full-Time",
    location: "Austin",
    salary: "$85k/year",
    postedDays: 1,
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2709603e7e80f9a6095b2274d0bebaece76fc6c821c3f8fd4aa3fadc9cfe4cd5?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
  },
  {
    title: "Backend Developer",
    type: "Remote, Part-Time",
    location: "Boston",
    salary: "$95k/year",
    postedDays: 4,
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/930986651bc9d8d80022b1349d06bee5ac26fada6f0518c5cbe2cbfbaf8ab631?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
  },
  {
    title: "Content Writer",
    type: "Remote, Freelance",
    location: "Chicago",
    salary: "$65k/year",
    postedDays: 6,
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/92fa58002bc6bb26edb4b1c7ada92a4e6d95198477aed359408116964dff1f8c?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
  },
  {
    title: "Sales Manager",
    type: "On-site, Full-Time",
    location: "Los Angeles",
    salary: "$115k/year",
    postedDays: 7,
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/082c7dce74bf22afeff13ef7f4c4ea112c2e0f82311dde8d6d92fed4699a23d2?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
  },
  {
    title: "Marketing Specialist",
    type: "Remote, Full-Time",
    location: "Miami",
    salary: "$75k/year",
    postedDays: 3,
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1478917441dd521533d0fcd3b1de443852dc3a140eebaa9a7e6ef8d329efec5d?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
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

const JobListings: React.FC = () => {
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
};

export default JobListings;