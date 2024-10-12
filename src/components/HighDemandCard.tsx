import React from 'react';

interface HighDemandCardProps {
    trend: string;
    description: string;
    salaryRange: string;
    growthRate: string;
    imageSrc: string;
}

const HighDemandCard: React.FC<HighDemandCardProps> = ({ trend, description, salaryRange, growthRate, imageSrc }) => {
return (
    <div className="flex grow gap-7 p-4 w-full text-sm bg-white rounded-md shadow-[0px_0px_2px_rgba(23,26,31,0.12)] text-zinc-400 transition-transform transform-gpu hover:scale-105">
    <div className="flex flex-col flex-1">
        <h3 className="text-xl text-zinc-900">{trend}</h3>
        <p className="mt-2">{description}</p>
        <p className="mt-2">Salary Range: {salaryRange}</p>
        <p className="mt-2">Growth Rate: {growthRate}</p>
    </div>
    <img loading="lazy" src={imageSrc} alt={`${trend}`} className="object-contain w-40 rounded" />
    </div>
);
};

export default HighDemandCard;