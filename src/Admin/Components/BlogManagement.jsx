import React, { useContext, useEffect, useState } from "react";
import supabase from "../../lib/supabase";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../../components/AuthContext";

const AdminBlogTable = () => {
  //  const {Id} = useParams()
  const [blogs, setBlogs] = useState([]);
  const { adminInfo, session } = useContext(AuthContext);
  const UID = session?.user?.id;

  const blogData = async () => {
    const { data, error } = await supabase.from("Blogs").select("*");
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      setBlogs(data);
    }
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from("Blogs").delete().eq("id", id);
    if (error) {
      console.error("Error deleting blog:", error);
    } else {
      alert("Confirm you delete this post");
      setBlogs(blogs.filter((blog) => blog.id !== id));
    }
  };

  useEffect(() => {
    blogData();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Blog Post
          </h1>
          {adminInfo.role === "user" ? (
            <Link
              to="/addBlog"
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              <FaPlusCircle className="text-lg" />
              Add Post
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <br />

      {/* Blog Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-3 border border-gray-300">Title</th>
              <th className="px-4 py-3 border border-gray-300">Description</th>
              <th className="px-4 py-3 border border-gray-300">Author</th>
              <th className="px-4 py-3 border border-gray-300">Actions</th>
              <th className="px-4 py-3 border border-gray-300">Image</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr
                key={blog.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-100`}
              >
                <td className="px-4 py-3 border border-gray-300 truncate">
                  {blog.title}
                </td>
                <td className="px-4 py-3 border border-gray-300 line-clamp-3">
                  {blog.description}
                </td>
                <td className="px-4 py-3 border border-gray-300 truncate max-w-md">
                  {blog.author}
                </td>
                <td className="px-4 py-3 border border-gray-300 text-center flex items-center justify-center gap-4">
                  {/* View Icon */}

                  {adminInfo.role === "admin" ? (
                    <>
                      {/* Delete Icon */}
                      <FaTrash
                        className="text-red-600 hover:text-red-800 cursor-pointer"
                        title="Delete"
                        onClick={() => handleDelete(blog.id)}
                      />
                    </>
                  ) : (
                    <Link to={`/blogs/${blog.id}`}>
                      <FaEdit
                        className="text-green-600 hover:text-green-800 cursor-pointer"
                        title="Edit"
                      />
                    </Link>
                  )}
                </td>
                <td className="px-4 py-3 border border-gray-300">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-16 w-16 object-cover rounded"
                    />
                  ) : (
                    "No image"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBlogTable;
