import React, { useEffect, useState } from 'react'
import { FaUsers } from 'react-icons/fa'
import supabase from '../../lib/supabase';

const TotalUserCard = () => {
  const [totalUsers, setTotalUsers] = useState(null)

  const TotalUser = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*", { count: "exact" })
      
      // .single();
    if (error) {
      console.log(error);
    } else {
      // console.log("all user's", data);
      setTotalUsers(data.length)
    }
  };
  useEffect(() => {
    TotalUser();
  }, []);


  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Total Users</h2>
      <p className="text-lg text-gray-600">{totalUsers}</p> {/* Example data */}
    </div>
    <FaUsers className="text-4xl text-green-600" />
  </div>
  )
}

export default TotalUserCard
