import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => (
  <Link
    to={href}
    className={`overflow-hidden px-3 py-4 rounded-md bg-black bg-opacity-0 ${
      isActive ? 'font-bold text-indigo-500' : 'text-gray-600'
    }`}
  >
    {children}
    {isActive && (
      <div className="flex shrink-0 mt-3 h-1 bg-indigo-500 rounded-sm" />
    )}
  </Link>
);

const Header: React.FC = () => {
  const location = useLocation(); // Use the current location

  return (
    <header className="flex flex-wrap gap-10 px-6 py-0.5 w-full bg-white shadow-[0px_0px_2px_rgba(23,26,31,0.12)] max-md:px-5 max-md:max-w-full">
      <div className="flex shrink gap-2.5 my-auto text-3xl text-black basis-auto grow-0">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f31eb56999abf644233e1c0f153f9aa5c68d1f54f23952e0e990c991f52688?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
          alt=""
          className="object-contain shrink-0 my-auto w-9 aspect-square"
        />
        <div className="basis-auto rotate-[2.4492937051703357e-16rad]">
          JobSphere
        </div>
      </div>
      <nav className="flex flex-wrap flex-auto gap-10 text-sm leading-loose max-md:max-w-full">
        <div className="flex text-gray-600 bg-black bg-opacity-0 max-md:max-w-full">
          <NavLink
            href="/"
            isActive={location.pathname === '/'} // Check if the path matches
          >
            Home
          </NavLink>
          <NavLink
            href="/job-listings"
            isActive={location.pathname === '/job-listings'}
          >
            Job Listings
          </NavLink>
        </div>
        <Link
          to="/"
          className="overflow-hidden px-14 py-2 my-auto text-white bg-indigo-500 rounded-lg border border-solid border-black border-opacity-0 rotate-[2.4492937051703357e-16rad] max-md:px-5"
        >
          Join Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
