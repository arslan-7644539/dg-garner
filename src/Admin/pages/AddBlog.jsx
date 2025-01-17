import React, { useState } from "react";
import supabase from "../../lib/supabase";
import toast from "react-hot-toast";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    authorName: "",
    imageUrl: "",
    authorImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("Blogs")
      .insert([
        {
          title: formData.title,
          description: formData.description,
          author: formData.authorName,
          authorImage: formData.authorImage,
          image: formData.imageUrl,
        },
      ])
      .select();
    if (error) {
      console.log(error);
      alert("try again");
    } else {
      console.log(data);
      toast.success("Post Published!", {
        position: "top-right",
      });
      setFormData({
        title: "",
        description: "",
        authorName: "",
        imageUrl: "",
        authorImageUrl: "",
      });
    }

    // console.log("Blog Submitted: ", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Add New Blog Post
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Blog Title and Author */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-lg font-medium text-gray-700"
              >
                Blog Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the blog title"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="authorName"
                className="text-lg font-medium text-gray-700"
              >
                Author Name
              </label>
              <input
                type="text"
                id="authorName"
                name="authorName"
                value={formData.authorName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the author name"
                required
              />
            </div>
          </div>

          {/* Blog and Author Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="imageUrl"
                className="text-lg font-medium text-gray-700"
              >
                Featured Image
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the featured image URL"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="authorImageUrl"
                className="text-lg font-medium text-gray-700"
              >
                Author Image
              </label>
              <input
                type="url"
                id="authorImage"
                name="authorImage"
                value={formData.authorImage}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the author image URL"
              />
            </div>
          </div>

          {/* Blog Description */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-lg font-medium text-gray-700"
            >
              Blog Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="6"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write the blog content here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
