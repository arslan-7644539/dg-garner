import React, { useEffect, useState } from "react";
import supabase from "../../lib/supabase";
import AdminNavbar from "../Components/AdminNavbar";

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      uid: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      message: "This is a sample message for testing the table layout.",
      createdAt: "2025-01-12 10:30:00",
    },
    {
      uid: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      message: "Another message to demonstrate the table layout.",
      createdAt: "2025-01-13 14:45:00",
    },
    {
      uid: 3,
      name: "Mike Johnson",
      email: "mikejohnson@example.com",
      message: "A brief message to showcase the clean table format.",
      createdAt: "2025-01-14 09:00:00",
    },
  ]);

  const userFeedback = async () => {
    const { data, error } = await supabase.from("Messages").select("*");
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      setMessages(data);
    }
      console.log("🚀 ~ userFeedback ~ data:", data)
  };

   useEffect(() => {
    userFeedback()

   }, [])
   

  return (
    <>
    <AdminNavbar/>
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold text-gray-900">
          <span className="text-indigo-600">Messages</span> Received
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Here is a list of messages received from users.
        </p>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-[#3B82F6] text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium">UID</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Email</th>
              <th className="px-6 py-4 text-left text-sm font-medium">
                Message
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.uid} className="border-t hover:bg-indigo-50">
                <td className="px-6 py-4 text-sm text-gray-800">
                  {message.UID}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {message.Name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {message.Email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {message.Message}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {message.created_at}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Messages;
