import React, { useEffect, useState } from "react";
import supabase from "../../lib/supabase";

const AdminBlogTable = () => {
  const [blogs, setBlogs] = useState([]);

  const blogData = async () => {
    const { data, error } = await supabase.from("Blogs").select("*");
    // console.log("🚀 ~ blogData ~ data:", data)
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      setBlogs(data);
    }
  };

  useEffect(() => {
    blogData();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Blog Post
        </h1>
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
                <td className="px-4 py-3 border border-gray-300 truncate  ">
                  {blog.title}
                </td>
                <td className="px-4 py-3 border border-gray-300  line-clamp-3">
                  {blog.description}
                </td>
                <td className="px-4 py-3 border border-gray-300 truncate max-w-md">
                  {blog.author}
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

      {/* Add New Blog Section */}
      {/* {isAdding && (
          <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Add New Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="title"
                value={newBlog.title}
                onChange={handleInputChange}
                placeholder="Title"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="title"
                value={newBlog.author}
                onChange={handleInputChange}
                placeholder="Author "
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="description"
                value={newBlog.description}
                onChange={handleInputChange}
                placeholder="Short Description"
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="content"
                value={newBlog.content}
                onChange={handleInputChange}
                placeholder="Full Content"
                rows="5"
                className="w-full col-span-1 md:col-span-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-4 mt-4">
              <button
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={blogPublish}
              >
                Publish
              </button>
              <button
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => setIsAdding(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )} */}
    </div>
  );
};

export default AdminBlogTable;
