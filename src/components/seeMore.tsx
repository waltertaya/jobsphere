import React from 'react';

const jobData = [
  {
    title: "Software Engineer",
    type: "Remote, Full-Time",
    location: "San Francisco",
    salary: "$120k/year",
    postedDays: 3,
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/47ce063b80a03e93be956d3888423b13f0c645e8a630a47c40f5cb561110264c?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1",
    company: "Google",
    description: "Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
    requirements: [ "Bachelor's degree in Computer Science or related field", "3+ years of experience in software development", "Experience with Java, C++, Python, or JavaScript" ],
    applyLink: "https://www.google.com/careers",
    responsibilities: [ "Develop software solutions by studying information needs", "Conducting systems flow, data usage, and work processes", "Investigating problem areas", "Following the software development lifecycle" ]
  }
];

const SeeMore: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-14 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1175px] max-md:max-w-full">
        <h2 className="self-center text-4xl leading-snug text-black rotate-[2.4492937051703357e-16rad]">
          {jobData[0].title}
        </h2>
        <div className="mt-9 w-full max-md:max-w-full">
          <div className="grid grid-cols-1 gap-5 max-md:grid-cols-1">
            <div className="flex grow gap-7 p-4 w-full text-sm bg-white rounded-md shadow-[0px_0px_2px_rgba(23,26,31,0.12)] text-zinc-400 transition-transform transform-gpu hover:scale-105">
              <div className="flex flex-col flex-1">
                <h3 className="text-xl rotate-[2.4492937051703357e-16rad] text-zinc-900">{jobData[0].company}</h3>
                <p className="self-start mt-12 leading-loose rotate-[2.4492937051703357e-16rad] max-md:mt-10">{jobData[0].type}</p>
                <p className="mt-2 leading-6 rotate-[2.4492937051703357e-16rad]">
                  {jobData[0].location} | {jobData[0].salary} | Posted {jobData[0].postedDays} days ago
                </p>
                <p className="mt-2 leading-6 rotate-[2.4492937051703357e-16rad]">
                  {jobData[0].description}
                </p>
                <h3 className="mt-2 text-xl rotate-[2.4492937051703357e-16rad] text-zinc-900">Requirements</h3>
                <ul className="mt-2 leading-6 list-disc rotate-[2.4492937051703357e-16rad]">
                  {jobData[0].requirements.map((requirement, index) => (
                    <li key={ index }>{ requirement }</li>
                    ))}
                </ul>
                <h3 className="mt-2 text-xl rotate-[2.4492937051703357e-16rad] text-zinc-900">Responsibilities</h3>
                <ul className="mt-2 leading-6 list-disc rotate-[2.4492937051703357e-16rad]">
                  {jobData[0].responsibilities.map((responsibility, index) => (
                    <li key={ index }>{ responsibility }</li>
                    ))}
                </ul>
                <a href={jobData[0].applyLink} className="overflow-hidden self-start px-3 py-2 mt-9 leading-loose text-indigo-500 bg-white rounded-md border border-indigo-500 border-solid rotate-[2.4492937051703357e-16rad]">
                  Apply
                </a>
                </div>
                <img loading="lazy" src={jobData[0].logoSrc} alt={`${jobData[0].title} company logo`} className="object-contain shrink-0 w-40 max-w-full rounded aspect-[0.77]" />
                </div>
                </div>
                </div>
                </div>
    </section>
    );
}

export default SeeMore;
