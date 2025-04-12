import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logout from './Logout';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => (
  <Link
    to={href}
    className={`overflow-hidden px-3 py-4 rounded-md ${
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
  const location = useLocation();
  const token = localStorage.getItem('token');

  return (
    <header className="flex flex-col items-center w-full px-6 py-2 bg-white shadow-[0px_0px_2px_rgba(23,26,31,0.12)]">
      {/* Logo and Name Section (Clickable) */}
      <Link to="/" className="flex items-center gap-2.5 text-3xl text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f31eb56999abf644233e1c0f153f9aa5c68d1f54f23952e0e990c991f52688?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
          alt=""
          className="object-contain w-9 aspect-square"
        />
        <div>JobSphere</div>
      </Link>

      {/* Navigation and Buttons (Horizontal Below Logo) */}
      <div className="flex items-center justify-between w-full mt-4 max-w-4xl">
        <nav className="flex flex-grow gap-5 text-sm leading-loose">
          <NavLink href="/" isActive={location.pathname === '/'}>
            Home
          </NavLink>
          <NavLink
            href="/job-listings"
            isActive={location.pathname === '/job-listings'}
          >
            Job Listings
          </NavLink>
        </nav>

        {/* Join Us or Logout Button */}
        <div className="flex items-center gap-5">
          {!token ? (
            <Link
              to="/auth"
              className="px-4 py-2 text-white bg-indigo-500 rounded-lg"
            >
              Join Us
            </Link>
          ) : (
            <Logout />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
