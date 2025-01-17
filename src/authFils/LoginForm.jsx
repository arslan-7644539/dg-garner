import React, { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../lib/supabase";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e) => {
    // debugger
    e.preventDefault();

    const { data: loginData, error: loginError } =
      await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
    if (loginError) {
      console.log(loginError);
      toast.error("Incorrect password.", {
        position: "top-right",
      });
      return;
    }
    // filter method for user role

    let { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", formData.email);

    if (error) {
      console.log(error);
      return;
    }
    if (users.length > 0) {
      const user = users[0];

      switch (user.role) {
        case null:
        case "":
        case undefined:
          navigate("/");
          break;

        case "admin":
          navigate("/superUser/admin");
          break;

        default:
          console.warn("Unexpected role:", users.role);
          navigate("/"); // Optional: Redirect to a safe default
          break;
      }
      toast.success("Successfully Logged In!", {
        position: "top-right",
      });
    } else {
      console.log("user not found");
      toast.error("credentials invalid", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Login
          </button>
        </form>

        {/* Don't Have an Account */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
