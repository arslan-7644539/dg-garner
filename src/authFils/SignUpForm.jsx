import React, { useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import supabase from "../lib/supabase";
import toast, { ToastBar } from "react-hot-toast";
import { GiToaster } from "react-icons/gi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignUpForm = () => {
    const navigate =useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
// debugger
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    const { data:signUpData, error:signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        emailRedirectTo : "http://localhost:5173/login",
        
      },
    });
    // console.log("🚀 ~ handleSubmit ~ data:", signUpData)
    if (signUpError) {
      console.log(signUpError);
    } else {
        console.log(signUpData);

      const { data:insertData, error:insertError } = await supabase
        .from("users")
        .insert([
          {
            email: formData.email,
            username: formData.username,
            password: formData.password,
            uid: signUpData.user.id,
          },
        ])
        .select();
      if (insertError) {
        console.log(insertError);
      } else {
        console.log(insertData);
      }

      setFormData({
        username: "",
        email: "",
        password: "",
      });
      toast.success('Successfully SignUp!', {
        position:"top-right"
      })
      navigate("/login")
    }
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Sign Up
          </button>
        </form>

        {/* Already Have an Account */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SignUpForm;
