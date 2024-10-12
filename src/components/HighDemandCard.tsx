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
    <div className="flex flex-col bg-white shadow-md rounded-md overflow-hidden transition-transform transform-gpu hover:scale-105">
      {/* Image section with constrained width and height */}
      <img 
        src={imageSrc} 
        alt={`${trend} illustration`} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{trend}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <p className="mt-3 text-sm text-gray-500">Salary: {salaryRange}</p>
        <p className="mt-1 text-sm text-gray-500">Growth Rate: {growthRate}</p>
      </div>
    </div>
  );
};

export default HighDemandCard;
