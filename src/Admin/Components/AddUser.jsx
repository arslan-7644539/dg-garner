import React, { useState } from "react";
// import { FaPlusCircle } from "react-icons/fa";
import supabase from "../../lib/supabase";
import toast from "react-hot-toast";
import AdminNavbar from "./AdminNavbar";

const AddUser = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    role: "",
  });

  // ========================================

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
  //     {
  //       email: formData.email,
  //       password: formData.password,
  //       options: {
  //         emailRedirectTo: "http://localhost:5173/login",
  //       },
  //     }
  //   );

  //   if (signUpError) {
  //     console.log(signUpError);
  //     toast.error("Sign-up failed. Please try again.", {
  //       position: "top-right",
  //     });
  //   } else {
  //     console.log(signUpData);

  //     // Insert user data into "users" table
  //     const { data: insertData, error: insertError } = await supabase
  //       .from("users")
  //       .insert([
  //         {
  //           email: formData.email,
  //           username: formData.userName,
  //           password: formData.password,
  //           uid: signUpData?.user?.id,
  //           role: formData.role,
  //         },
  //       ])
  //       .select();

  //     if (insertError) {
  //       console.log(insertError);
  //       toast.error("Error while adding user. Please try again.", {
  //         position: "top-right",
  //       });
  //     } else {
  //       console.log(insertData);
  //       toast.success("Successfully added new user!", {
  //         position: "top-right",
  //       });
  //       setFormData({
  //         userName: "",
  //         email: "",
  //         password: "",
  //         role: "",
  //       });
  //     }
  //   }
  // };

  // =============================================

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: "http://localhost:5173/login",
        },
      }
    );
    if (signUpError) {
      console.log(signUpError);
    } else {
      console.log(signUpData);
      const { data: insertData, error: insertError } = await supabase
        .from("users")
        .insert([
          {
            username: formData.userName,
            email: formData.email,
            password: formData.password,
            role: formData.role,
          },
        ])
        .select();

      if (insertError) {
        console.log(insertError);
      } else {
        console.log(insertData);

        toast.success("Successfully added new user!", {
          position: "top-right",
        });

        setFormData({
          userName: "",
          email: "",
          password: "",
          role: "",
        });
      }
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
          {/* Add User Form */}
          <h3 className="text-xl font-bold text-gray-800 mb-4">Add New User</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="userName"
                  className="text-lg font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter username"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter email address"
                  required
                />
              </div>
            </div>

            {/* Password and Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-lg font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter password"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="role"
                  className="text-lg font-medium text-gray-700"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
