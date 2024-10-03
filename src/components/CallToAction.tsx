import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full text-lg leading-loose bg-gray-50 rounded-md max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-center mb-0 max-w-full w-[609px] max-md:mb-2.5">
        <h2 className="text-5xl font-bold leading-none text-center text-indigo-500 rotate-[2.4492937051703357e-16rad] max-md:text-4xl">
          Get hired faster!
        </h2>
        <p className="self-stretch mt-2 text-center rotate-[2.4492937051703357e-16rad] text-zinc-900 max-md:max-w-full">
        Explore a world of top-tier tech opportunities. Whether you're looking for remote flexibility or an on-site challenge, our platform connects you with the perfect roles to elevate your career. Your next great opportunity is just a click away.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;