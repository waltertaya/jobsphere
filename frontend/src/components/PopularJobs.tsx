import React from 'react';
import HighDemandCard from './HighDemandCard';

const highDemandData = [
  {
    id: 1,
    trend: "AI Engineers",
    description: "Projected growth of 35% by 2025, driven by advancements in machine learning and automation.",
    salaryRange: "$150k - $200k/year",
    growthRate: "35% growth in 5 years",
    imageSrc: "https://cdn.prod.website-files.com/60d07e2eecb304cb4350b53f/6481f375cb424c5742b3bfa4_what-is-artificial-intelligence-engineering.webp"
  },
  {
    id: 2,
    trend: "Cloud Computing Skills",
    description: "Cloud professionals are highly sought after, with companies like AWS and Microsoft Azure leading the charge.",
    salaryRange: "$130k - $180k/year",
    growthRate: "20% growth in cloud-related roles",
    imageSrc: "https://t4.ftcdn.net/jpg/03/54/34/51/360_F_354345119_TqAOr4z9cyArqlYl6rhN4pMH4Rkku9VD.jpg"
  },
  {
    id: 3,
    trend: "Cybersecurity",
    description: "With increasing digital threats, demand for cybersecurity professionals is at an all-time high.",
    salaryRange: "$120k - $170k/year",
    growthRate: "Expected job growth: 45% over 3 years",
    imageSrc: "https://t3.ftcdn.net/jpg/07/70/98/72/360_F_770987245_9mmE8ctOjYLy45gJHHi9vHeP14jVZhxc.jpg"
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
          {/* Updated grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
