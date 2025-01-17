import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../lib/supabase";
import toast from "react-hot-toast";
import { AuthContext } from "../../components/AuthContext";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const { adminInfo, session , setSession} = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to handle sign out
  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      toast.success("Successfully Log Out!", {
        position: "top-right",
      });
      navigate("/");
      setSession(null)
    }
  }

  return (
    <>
      <div>
        {/* Navbar */}
        <nav className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md relative top-0 w-full z-10">
          <div className="container mx-auto flex items-center justify-between px-6 py-4 ">
            <Link
              to="/"
              className="text-white hover:text-yellow-400 text-2xl font-bold"
            >
              DG Garner
            </Link>

            {/* Left Side - Navigation Links */}
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/superUser/admin"
                  className="text-white hover:text-yellow-400 font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/superUser/users"
                  className="text-white hover:text-yellow-400 font-semibold"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  to="/superUser/production"
                  className="text-white hover:text-yellow-400 font-semibold"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/superUser/blogs"
                  className="text-white hover:text-yellow-400 font-semibold"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/superUser/feedback"
                  className="text-white hover:text-yellow-400 font-semibold"
                >
                  Messages
                </Link>
              </li>
            </ul>

            {/* Right Side - Admin Profile & Notification */}
            <div className="flex items-center space-x-4 relative">
              {/* Notification Icon */}
              <div className="relative">
                <button className="text-white hover:text-yellow-400 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
                    />
                  </svg>
                </button>
                <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-600 rounded-full"></span>
              </div>

              {/* Admin Info */}
              <div className="relative">
                <img
                  src={adminInfo?.userImage}
                  alt="Admin Profile"
                  className="rounded-full w-10 h-10 cursor-pointer border-2 border-white"
                  onClick={toggleDropdown}
                />

                {/* Dropdown Menu */}
                {dropdownOpen && adminInfo && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
                    {adminInfo ? (
                      <p className="block px-4 py-2 text-sm text-gray-700 font-semibold border-b">
                        Hello, {adminInfo.username}!
                      </p>
                    ) : (
                      <p className="block px-4 py-2 text-sm text-gray-700 font-semibold border-b">
                        Hello, Admin!
                      </p>
                    )}

                    <button
                      onClick={signOut}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                    >
                      Logout
                    </button>
                    <Link
                      to="/superUser/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                    >
                      Profile
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default AdminNavbar;
