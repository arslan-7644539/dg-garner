import React from "react";

import AdminNavbar from "../Components/AdminNavbar";
import supabase from "../../lib/supabase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Profaile = () => {
  const navigate = useNavigate()
  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      toast.success("Successfully Log Out!", {
        position: "top-right",
      });
      navigate("/");
    }
  }
  return (
    <>
      <AdminNavbar />
      <div className="flex min-h-screen">
        <div className="flex-1 bg-gray-100 p-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="flex items-center space-x-6 mb-8">
              <img
                className="w-20 h-20 rounded-full border-4 border-blue-500"
                src="https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/470678431_1616774072285511_1235718475659645879_n.jpg?ccb=11-4&oh=01_Q5AaIHGI79VTcr6D6DpJVNmPM6tUlWrzvDuzEBf6IllYWqnZ&oe=6791C7C2&_nc_sid=5e03e0&_nc_cat=108"
                alt="Admin Profile"
              />
              <div>
                <h3 className="text-3xl font-semibold text-gray-800">
                  M.Arslan
                </h3>
                <p className="text-lg text-gray-500">Administrator</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 font-medium">Email:</p>
                <p className="text-gray-600">arslan7644539@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Role:</p>
                <p className="text-gray-600">Administrator</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Joined:</p>
                <p className="text-gray-600">January 2020</p>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300">
                Edit Profile
              </button>
              <button onClick={signOut} className="w-full py-3 bg-red-600 text-white rounded-lg text-lg hover:bg-red-700 transition duration-300">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profaile;
