import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import supabase from "../../lib/supabase";
import { Link } from "react-router-dom";
import { MdOutlineLocalPostOffice } from "react-icons/md";

const AddPost = () => {
  const [allNewPost, setAllNewPost] = useState([]);
  // const allNewPost = data.length
  const allPost = async () => {
    const { data, error } = await supabase.from("Blogs").select("*");
    // console.log("🚀 ~ allPost ~ data:", data)

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      setAllNewPost(data.length);
    }
  };

  useEffect(() => {
    allPost();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Total Posts</h2>
        <p className="text-lg text-gray-600">{allNewPost}</p>
      </div>
      <Link to="/superUser/blogs">
        <MdOutlineLocalPostOffice className="cursor-pointer text-4xl text-blue-600" />
      </Link>
    </div>
  );
};

export default AddPost;
