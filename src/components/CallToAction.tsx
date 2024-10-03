import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full text-lg leading-loose bg-gray-50 rounded-md max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-center mb-0 max-w-full w-[609px] max-md:mb-2.5">
        <h2 className="text-5xl font-bold leading-none text-center text-indigo-500 rotate-[2.4492937051703357e-16rad] max-md:text-4xl">
          Get hired faster!
        </h2>
        <p className="self-stretch mt-2 text-center rotate-[2.4492937051703357e-16rad] text-zinc-900 max-md:max-w-full">
          Submit your resume today and connect with top employers in your field.
        </p>
        <button className="overflow-hidden px-5 py-3 mt-5 text-white whitespace-nowrap bg-indigo-500 rounded-md border border-solid border-black border-opacity-0 rotate-[2.4492937051703357e-16rad] w-[84px]">
          Send
        </button>
      </div>
    </section>
  );
};

export default CallToAction;