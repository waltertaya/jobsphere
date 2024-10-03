import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => (
  <Link
    to={href}
    className={`overflow-hidden px-3 py-4 rounded-md bg-black bg-opacity-0 ${
      isActive
        ? 'font-bold text-indigo-500'
        : 'text-gray-600'
    }`}
  >
    {children}
    {isActive && (
      <div className="flex shrink-0 mt-3 h-1 bg-indigo-500 rounded-sm" />
    )}
  </Link>
);

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-10 px-6 py-0.5 w-full bg-white shadow-[0px_0px_2px_rgba(23,26,31,0.12)] max-md:px-5 max-md:max-w-full">
      <div className="flex shrink gap-2.5 my-auto text-3xl text-black basis-auto grow-0">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9883e4c1be7ffa1517087642051e3f22b623c074bd74019acbd2647de92a2efe?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1" alt="" className="object-contain shrink-0 my-auto w-9 aspect-square" />
        <div className="basis-auto rotate-[2.4492937051703357e-16rad]">JobSphere</div>
      </div>
      <nav className="flex flex-wrap flex-auto gap-10 text-sm leading-loose max-md:max-w-full">
        <div className="flex text-gray-600 bg-black bg-opacity-0 max-md:max-w-full">
          <NavLink href="/" isActive>Home</NavLink>
          <NavLink href="/">Job Listings</NavLink>
          <NavLink href="/">Resources</NavLink>
          <NavLink href="/">About us</NavLink>
          <NavLink href="/">Contact Us</NavLink>
        </div>
        <Link to="/" className="overflow-hidden px-14 py-2 my-auto text-white bg-indigo-500 rounded-lg border border-solid border-black border-opacity-0 rotate-[2.4492937051703357e-16rad] max-md:px-5">
          Join Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;