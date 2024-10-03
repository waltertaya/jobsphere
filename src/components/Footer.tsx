import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="flex overflow-hidden flex-col items-center px-20 pt-24 pb-6 w-full bg-gray-50 shadow-[0px_0px_2px_rgba(23,26,31,0.12)] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1176px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 self-center ml-5 max-w-full w-[691px]">
          <div className="flex flex-col items-start self-end mt-56 text-sm whitespace-nowrap text-zinc-700 max-md:mt-10">
            <h3 className="self-stretch text-xl font-bold rotate-[2.4492937051703357e-16rad]">Product</h3>
            <Link to="/features" className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]">Features</Link>
            <Link to="/pricing" className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]">Pricing</Link>
          </div>
          <div className="flex-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-center w-full text-sm font-bold max-md:mt-7">
                  <div className="flex gap-3 w-52 max-w-full text-3xl text-zinc-900">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f31eb56999abf644233e1c0f153f9aa5c68d1f54f23952e0e990c991f52688?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1" alt="ALX Jobs Logo" className="object-contain shrink-0 w-12 rounded-md aspect-square" />
                    <div className="grow shrink rotate-[2.4492937051703357e-16rad] w-[138px]">ALX Jobs</div>
                  </div>
                  <h3 className="mt-12 text-xl text-center rotate-[2.4492937051703357e-16rad] text-zinc-700 max-md:mt-10">Subscribe to our newsletter</h3>
                  <form className="flex gap-px self-stretch mt-2 leading-loose">
                    <div className="flex flex-auto gap-1.5 self-start px-3 py-2 bg-gray-200 rounded-md border border-solid border-black border-opacity-0 text-neutral-300">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/38e59d030571619f19120b6597142bccd5f8998d6c0c5ca443b53ff6c1941f86?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1" alt="" className="object-contain shrink-0 my-auto w-4 aspect-square" />
                      <input type="email" placeholder="Input your email" aria-label="Input your email" className="bg-transparent border-none outline-none" />
                    </div>
                    <button type="submit" className="overflow-hidden px-6 py-2 text-white whitespace-nowrap bg-indigo-500 rounded-none border border-solid border-black border-opacity-0 rotate-[2.4492937051703357e-16rad] max-md:px-5">
                      Subscribe
                    </button>
                  </form>
                  <div className="flex gap-10 mt-12 max-w-full text-zinc-700 w-[273px] max-md:mt-10">
                    <div className="flex flex-col flex-1 items-start">
                      Continuing from where we left off:

                      <h3 className="self-stretch text-xl font-bold rotate-[2.4492937051703357e-16rad]">Resources</h3>
                      <Link to="/blog" className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]">Blog</Link>
                      <Link to="/user-guides" className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]">User guides</Link>
                      <Link to="/webinars" className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]">Webinars</Link>
                    </div>
                    <div className="flex flex-col flex-1 items-start self-start">
                      <h3 className="self-stretch text-xl font-bold rotate-[2.4492937051703357e-16rad]">Company</h3>
                      <Link to="/about" className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]">About us</Link>
                      <Link to="/contact" className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]">Contact us</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-start mt-56 text-sm text-zinc-700 max-md:mt-10">
                  <h3 className="self-stretch text-xl font-bold rotate-[2.4492937051703357e-16rad]">Plans & Pricing</h3>
                  <Link to="/plans/personal" className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]">Personal</Link>
                  <Link to="/plans/startup" className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]">Start up</Link>
                  <Link to="/plans/organization" className="mt-3 leading-loose rotate-[2.4492937051703357e-16rad]">Organization</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-10 self-stretch px-3 py-2 text-sm leading-loose whitespace-nowrap bg-gray-200 rounded-md border border-solid border-black border-opacity-0 text-zinc-900">
            <span>English</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ce5a849479916019f9ac1df75070a8e3ddf0a196649085e07234dbb4b587f3b?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1" alt="" className="object-contain shrink-0 my-auto w-4 aspect-square" />
          </div>
          <div className="flex gap-1.5 self-stretch my-auto text-sm leading-loose text-gray-700">
            <span className="grow rotate-[2.4492937051703357e-16rad]">© 2024 Brand, Inc.</span>
            <span className="my-auto text-xs leading-loose rotate-[2.4492937051703357e-16rad]">•</span>
            <Link to="/privacy" className="rotate-[2.4492937051703357e-16rad]">Privacy</Link>
            <span className="my-auto text-xs leading-loose rotate-[2.4492937051703357e-16rad]">•</span>
            <Link to="/terms" className="rotate-[2.4492937051703357e-16rad]">Terms</Link>
            <span className="my-auto text-xs leading-loose rotate-[2.4492937051703357e-16rad]">•</span>
            <Link to="/sitemap" className="rotate-[2.4492937051703357e-16rad]">Sitemap</Link>
          </div>
          <div className="flex gap-4 self-stretch my-auto">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/36ad4dad26f63846a292b582a539126ec049f60a649beccc31cbd2626b9d8f9f?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1" alt="Facebook" className="object-contain shrink-0 w-6 aspect-square" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/63f7f7cd8faef14895c00d7e621c316fc19d7421135565d0071b28eb2a44cd11?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1" alt="Twitter" className="object-contain shrink-0 w-6 aspect-square" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf24f15109b2c79ebd7b4df91e4e3a1a4b138cd6dc00df0465da06059b748742?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1" alt="Instagram" className="object-contain shrink-0 w-6 aspect-square" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/882bfe0bad03d8ae4e8d881a8cf57a4dacb43b4bd3fc0e00db568f5a1842aa3b?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1" alt="LinkedIn" className="object-contain shrink-0 w-6 aspect-square" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;