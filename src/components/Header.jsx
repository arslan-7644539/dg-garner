import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SearchContext } from "./SearchContext";
import supabase from "../lib/supabase";
import toast from "react-hot-toast";
import { AuthContext } from "./AuthContext";

const Header = () => {
  const { searchInput, setSearchInput } = useContext(SearchContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null); // Ref for dropdown
  const navigate = useNavigate();
  const { session, setSession, adminInfo } = useContext(AuthContext);

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      toast.success("Successfully Logged Out!", {
        position: "top-right",
      });
      navigate("/");
      setSession(null);
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md relative top-0 w-full z-10">
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
        <nav className="hidden md:flex space-x-8 items-center">
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
          {session?.user?.id && (
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
          )}

          {!session?.user?.id ? (
            <>
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
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              { adminInfo.role === "user" ? (
                <img
                  src={adminInfo.userImage}
                  alt="User"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
              ) : (
                <img
                  // src={adminInfo.userImage}
                  alt="User"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
              )}

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                  {adminInfo.role === "user" ? (
                    <p className="block px-4 py-2 text-sm text-gray-700 font-semibold border-b">
                      Hello, {adminInfo.username}!
                    </p>
                  ) : (
                    <p className="block px-4 py-2 text-sm text-gray-700 font-semibold border-b">
                      Hello, User!
                    </p>
                  )}

                  <Link
                    to="/userProfile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    to="blogs"
                  >
                    Blog Post
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
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
            {session?.user?.id && (
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
            )}

            {!session?.user?.id ? (
              <>
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
              </>
            ) : (
              <button
                onClick={signOut}
                className="text-white hover:text-gray-300"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
