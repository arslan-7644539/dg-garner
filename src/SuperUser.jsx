import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./components/AuthContext";
import { Outlet, useNavigate } from "react-router-dom";
import AdminNavbar from "./Admin/Components/AdminNavbar";

const SuperUser = () => {
  const [admin, setadmin] = useState(null);
  const { adminInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (adminInfo) {
      if (adminInfo.role === "admin") {
        setadmin(true);
      } else if (adminInfo.role === "user" || adminInfo.role === null) {
        setadmin(false);
        navigate("/");
      }
    }
  }, [adminInfo, navigate]);

  if (admin === null) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 Page Not Found
        </h1>
        <p className="text-xl text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
    );
  }

  return admin ? (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  ) : null;
};

export default SuperUser;
