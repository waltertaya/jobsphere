import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SeeMore: React.FC = () => {
  const [jobData, setJobData] = useState<any>(null);  // State to hold job data
  const location = useLocation();

  // Function to get job_id from URL query string
  const getJobIdFromUrl = () => {
    const params = new URLSearchParams(location.search);
    return params.get('job_id');
  };

  useEffect(() => {
    const jobId = getJobIdFromUrl();
    
    // Fetch job data from the API
    const fetchJobData = async () => {
      try {
        const response = await fetch(`http://20.127.190.72/api/api/v1/jobs/${jobId}`, {
          // headers: {
          //   'x-api-key': '9fbd769c8a2a4e0am6a26f47562620c2',
          // },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch job data');
        }
        const data = await response.json();
        setJobData(data);  // Set the fetched data to state
      } catch (error) {
        console.error("error collecting data");
      }
    };

    fetchJobData();
  }, [location]);

  // Loading state or error handling
  if (!jobData) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-12 h-12 border-2 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="flex flex-col justify-center items-center px-4 py-14 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1175px] max-md:max-w-full">
        <h2 className="self-center text-4xl leading-snug text-black">
          {jobData.title}
        </h2>
        <div className="mt-9 w-full max-md:max-w-full">
          <div className="grid grid-cols-1 gap-5 max-md:grid-cols-1">
            {/* Responsive layout for image on top on small screens and side on larger screens */}
            <div className="flex flex-col-reverse md:flex-row gap-7 p-4 w-full text-sm bg-white rounded-md shadow-[0px_0px_2px_rgba(23,26,31,0.12)] text-zinc-400 transition-transform transform-gpu hover:scale-105">
              {/* Job Info Section */}
              <div className="flex flex-col flex-1">
                <h3 className="text-xl text-zinc-900">{jobData.company}</h3>
                <p className="self-start mt-12 leading-loose max-md:mt-6">{jobData.type}</p>
                <p className="mt-2 leading-6">
                  {jobData.location} | {jobData.salary} | Posted {jobData.postedDays} days ago
                </p>
                <p className="mt-2 leading-6">
                  {jobData.description}
                </p>

                {/* Requirements Section */}
                <h3 className="mt-2 text-xl text-zinc-900">Requirements</h3>
                {jobData.requirements && (
                  <ul className="mt-2 leading-6 list-disc">
                    {jobData.requirements.map((requirement: string, index: number) => (
                      <li key={ index }>{ requirement }</li>
                    ))}
                  </ul>
                )}

                {/* Responsibilities Section */}
                <h3 className="mt-2 text-xl text-zinc-900">Responsibilities</h3>
                {jobData.responsibilities && (
                  <ul className="mt-2 leading-6 list-disc">
                    {jobData.responsibilities.map((responsibility: string, index: number) => (
                      <li key={ index }>{ responsibility }</li>
                    ))}
                  </ul>
                )}

                {/* Apply Link */}
                <a href={jobData.applyLink} className="overflow-hidden self-start px-3 py-2 mt-9 leading-loose text-indigo-500 bg-white rounded-md border border-indigo-500 border-solid">
                  Apply
                </a>
              </div>

              {/* Company Logo/Image Section */}
              <img 
                loading="lazy" 
                src={jobData.logoSrc} 
                alt={`${jobData.title} company logo`} 
                className="object-contain shrink-0 w-full md:w-40 max-w-full rounded aspect-[0.77]" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeeMore;
