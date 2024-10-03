import React from 'react';

interface JobCardProps {
  title: string;
  type: string;
  location: string;
  salary: string;
  postedDays: number;
  logoSrc: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, type, location, salary, postedDays, logoSrc }) => {
  return (
    <div className="flex grow gap-7 p-4 w-full text-sm bg-white rounded-md shadow-[0px_0px_2px_rgba(23,26,31,0.12)] text-zinc-400">
      <div className="flex flex-col flex-1">
        <h3 className="text-xl rotate-[2.4492937051703357e-16rad] text-zinc-900">{title}</h3>
        <p className="self-start mt-12 leading-loose rotate-[2.4492937051703357e-16rad] max-md:mt-10">{type}</p>
        <p className="mt-2 leading-6 rotate-[2.4492937051703357e-16rad]">
          {location} | {salary} | Posted {postedDays} days ago
        </p>
        <button className="overflow-hidden self-start px-3 py-2 mt-9 leading-loose text-indigo-500 bg-white rounded-md border border-indigo-500 border-solid rotate-[2.4492937051703357e-16rad]">
          See more
        </button>
      </div>
      <img loading="lazy" src={logoSrc} alt={`${title} company logo`} className="object-contain shrink-0 w-40 max-w-full rounded aspect-[0.77]" />
    </div>
  );
};

export default JobCard;