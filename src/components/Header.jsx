import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md fixed top-0 w-full">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">DG Garner</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-white hover:text-gray-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-white hover:text-gray-300"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-white hover:text-gray-300"
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-white hover:text-gray-300"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.41-1.41l3.32 3.33a1 1 0 01-1.41 1.41l-3.32-3.33zm-6.9-4.32a6 6 0 1112 0 6 6 0 01-12 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
