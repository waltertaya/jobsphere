import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col w-full text-white bg-neutral-800 max-md:max-w-full">
      <div className="flex relative flex-col w-full min-h-[640px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/68bd81a052307cc6a400bfbabf2c606e048a7c490cf263bf004dbea58b73dda3?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1" alt="Job listings background" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col items-start px-20 pt-72 pb-32 w-full bg-zinc-900 bg-opacity-40 max-md:px-5 max-md:py-24 max-md:max-w-full">
          <div className="flex flex-col items-start mb-0 max-w-full w-[642px] max-md:mb-2.5">
            <h1 className="text-6xl font-bold leading-none rotate-[2.4492937051703357e-16rad] max-md:text-4xl">
              Job Listings
            </h1>
            <p className="self-stretch mt-6 text-2xl text-gray-100 rotate-[2.4492937051703357e-16rad] max-md:max-w-full">
              Discover your next career move with JobSphere.
            </p>
            <Link to="/explore-jobs" className="overflow-hidden px-5 py-3 mt-6 text-lg leading-loose bg-indigo-500 rounded-md border border-solid border-black border-opacity-0 rotate-[2.4492937051703357e-16rad]">
              Explore Jobs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;