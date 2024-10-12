import React from 'react';
import HighDemandCard from './HighDemandCard';

const highDemandData = [
  {
    id: 1,
    trend: "AI Engineers",
    description: "Projected growth of 35% by 2025, driven by advancements in machine learning and automation.",
    salaryRange: "$150k - $200k/year",
    growthRate: "35% growth in 5 years",
    imageSrc: "https://img.freepik.com/free-photo/arab-guy-utilizes-ai-desktop-computer_482257-76214.jpg?size=626&ext=jpg"
  },
  {
    id: 2,
    trend: "Cloud Computing Skills",
    description: "Cloud professionals are highly sought after, with companies like AWS and Microsoft Azure leading the charge.",
    salaryRange: "$130k - $180k/year",
    growthRate: "20% growth in cloud-related roles",
    imageSrc: "https://image.shutterstock.com/image-photo/modern-city-traffic-cloud-computing-450w-2433109191.jpg"
  },
  {
    id: 3,
    trend: "Cybersecurity",
    description: "With increasing digital threats, demand for cybersecurity professionals is at an all-time high.",
    salaryRange: "$120k - $170k/year",
    growthRate: "Expected job growth: 45% over 3 years",
    imageSrc: "https://media.istockphoto.com/id/1280292816/photo/visualization-of-cyber-attacks.jpg?s=612x612&w=0&k=20&c=AFmpKJ7VjVExP-wrnoJ86Wnqs9qXiOxaw8QcABzsaZY="
  }
];


const HighDemandJobs: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-14 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1175px] max-md:max-w-full">
        <h2 className="self-center text-4xl leading-snug text-black">
          High Demand Jobs
        </h2>
        <div className="mt-9 w-full max-md:max-w-full">
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {highDemandData.map((trendItem, index) => (
              <HighDemandCard key={index} {...trendItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default HighDemandJobs;