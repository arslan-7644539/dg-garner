import React, { useEffect, useState } from "react";
import supabase from "../../lib/supabase";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const handleRemoveUser = (uid) => {
    setUsers(users.filter((user) => user.uid !== uid));
  };

  let allUser = async () => {
    const { data, error } = await supabase.from("users").select("*");
    console.log("🚀 ~ allUser ~ data:", data);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      setUsers(data);
    }
  };
  useEffect(() => {
    allUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Management</h1>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse bg-white shadow-md border border-gray-300">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="px-4 py-3 font-semibold text-sm">Username</th>
              <th className="px-4 py-3 font-semibold text-sm">UUID</th>
              <th className="px-4 py-3 font-semibold text-sm">Created At</th>
              <th className="px-4 py-3 font-semibold text-sm">Email</th>
              <th className="px-4 py-3 font-semibold text-sm">Role</th>
              <th className="px-4 py-3 font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.uuid}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="px-4 py-3 text-gray-800">{user.username}</td>
                <td className="px-4 py-3 text-gray-800">{user.uid}</td>
                <td className="px-4 py-3 text-gray-800">{user.created_at}</td>
                <td className="px-4 py-3 text-gray-800">{user.email}</td>
                <td className="px-4 py-3 text-gray-800">{user.role}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleRemoveUser(user.uid)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
