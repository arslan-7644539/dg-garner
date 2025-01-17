import React from "react";
import TotalItemCard from "../Components/TotalItemCard";
import TotalUserCard from "../Components/TotalUserCard";
import AddPost from "../Components/AddPost";

const AdminHomePage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-gray-100 p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TotalItemCard />

          <TotalUserCard />
          <AddPost />
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
