import React from 'react';
import './JobCard.css'; // Import the CSS file for custom styles

interface JobCardProps {
  id: number;
  title: string;
  type: string;
  location: string;
  salary: string;
  postedDays: number;
  logoSrc: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, type, location, salary, postedDays, logoSrc, id }) => {
  return (
    <div className="job-card flex grow gap-7 p-4 w-full text-sm bg-white rounded-md shadow-[0px_0px_2px_rgba(23,26,31,0.12)] text-zinc-400 transition-transform transform-gpu hover:scale-105">
      <img 
        loading="lazy" 
        src={logoSrc} 
        alt={`${title} company logo`} 
        className="object-contain shrink-0 w-40 max-w-full rounded aspect-[0.77] regular-image"
      />
      
      <div className="flex flex-col flex-1">
        <h3 className="text-xl text-zinc-900">{title}</h3>
        <p className="self-start mt-12 leading-loose max-md:mt-10">{type}</p>
        <p className="mt-2 leading-6">
          {location} | {salary} | Posted {postedDays} days ago
        </p>
        <a 
          href={`/see-more?job_id=${id}`} 
          className="overflow-hidden self-start px-3 py-2 mt-9 leading-loose text-indigo-500 bg-white rounded-md border border-indigo-500 border-solid"
        >
          See more
        </a>
      </div>
    </div>
  );
}

export default JobCard;
