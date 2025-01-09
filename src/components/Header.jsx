// import React, { useContext, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { SearchContext } from "./SearchContext";

// const Header = () => {
//   const { searchInput, setSearchInput } = useContext(SearchContext);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [signUp, setsignUp] = useState(false)

//   return (
//     <header className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md fixed top-0 w-full z-10">
//       <div className="container mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-white hover:text-yellow-400 text-2xl font-bold"
//         >
//           DG Garner
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden text-white ml-auto"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Search Bar for MD Screen and above */}
//         <div className="relative hidden md:block flex-grow mx-8">
//           <input
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             type="text"
//             placeholder="Search..."
//             className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>

//         {/* Navigation Links and Login/Sign Up on Mobile */}
//         <nav
//           className={`md:flex space-x-8 ${
//             isMobileMenuOpen
//               ? "block absolute top-16 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 py-4 md:static"
//               : "hidden"
//           } md:block`}
//         >
//           {/* Left side for Pages */}
//           <div className="space-y-4 md:flex md:space-x-8 md:space-y-0">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-400 font-semibold"
//                   : "text-white hover:text-gray-300"
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-400 font-semibold"
//                   : "text-white hover:text-gray-300"
//               }
//             >
//               About
//             </NavLink>
//             <NavLink
//               to="/blog"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-400 font-semibold"
//                   : "text-white hover:text-gray-300"
//               }
//             >
//               Blog
//             </NavLink>
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-400 font-semibold"
//                   : "text-white hover:text-gray-300"
//               }
//             >
//               Contact
//             </NavLink>
//           </div>

//           {/* Right side for Login/Sign Up */}
//           <div className="space-y-4 md:flex md:space-x-8 md:space-y-0 md:ml-auto">
//             <Link
//               to="/login"
//               className="px-4 py-2 bg-white text-blue-500 rounded-full font-semibold hover:bg-blue-100"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="px-4 py-2 bg-yellow-400 text-white rounded-full font-semibold hover:bg-yellow-500"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// ========================================1==================================================================

// import React, { useContext, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { SearchContext } from "./SearchContext";

// const Header = () => {
//   const { searchInput, setSearchInput } = useContext(SearchContext);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md fixed top-0 w-full z-10">
//       <div className="container mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-white hover:text-yellow-400 text-2xl font-bold"
//         >
//           DG Garner
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden text-white ml-auto"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Desktop Search Bar */}
//         <div className="relative hidden md:block flex-grow mx-8">
//           <input
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             type="text"
//             placeholder="Search..."
//             className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex space-x-8">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-yellow-400 font-semibold"
//                 : "text-white hover:text-gray-300"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-yellow-400 font-semibold"
//                 : "text-white hover:text-gray-300"
//             }
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/blog"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-yellow-400 font-semibold"
//                 : "text-white hover:text-gray-300"
//             }
//           >
//             Blog
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-yellow-400 font-semibold"
//                 : "text-white hover:text-gray-300"
//             }
//           >
//             Contact
//           </NavLink>
//         </nav>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md">
//           <nav className="flex flex-col space-y-4 py-4 px-6">
//             <NavLink
//               to="/"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-400 font-semibold"
//                   : "text-white hover:text-gray-300"
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/about"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-400 font-semibold"
//                   : "text-white hover:text-gray-300"
//               }
//             >
//               About
//             </NavLink>
//             <NavLink
//               to="/blog"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-400 font-semibold"
//                   : "text-white hover:text-gray-300"
//               }
//             >
//               Blog
//             </NavLink>
//             <NavLink
//               to="/contact"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-400 font-semibold"
//                   : "text-white hover:text-gray-300"
//               }
//             >
//               Contact
//             </NavLink>
//             <Link
//               to="/login"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="text-white hover:text-gray-300"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="text-white hover:text-gray-300"
//             >
//               Sign Up
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

// ==============================================2end===============

import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SearchContext } from "./SearchContext";

const Header = () => {
  const { searchInput, setSearchInput } = useContext(SearchContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-white hover:text-yellow-400 text-2xl font-bold"
        >
          DG Garner
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white ml-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Search Bar */}
        <div className="relative hidden md:block flex-grow mx-8">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

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
          <Link
            to="/login"
            className="px-4 py-2 bg-white text-blue-500 rounded-full font-semibold hover:bg-blue-100"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-yellow-400 text-white rounded-full font-semibold hover:bg-yellow-500"
          >
            Sign Up
          </Link> 
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
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
              onClick={() => setIsMobileMenuOpen(false)}
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
              onClick={() => setIsMobileMenuOpen(false)}
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
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "text-white hover:text-gray-300"
              }
            >
              Contact
            </NavLink>
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-gray-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-gray-300"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
