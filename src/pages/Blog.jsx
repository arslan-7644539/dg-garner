import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const url = "https://677692da12a55a9a7d0c32ef.mockapi.io/api/v1/blogs";

  async function getUser() {
    try {
      const response = await axios.get(url);
      // console.log(response);
      setBlogData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // console.log(blogData);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {blogData.map((data, index) => (
          <>
            <div key={index} className="max-w-sm mx-auto  bg-white rounded-lg shadow-lg overflow-hidden ">
              {/* Blog Image */}
              <img
                src="https://via.placeholder.com/400x200"
                alt="Blog Post"
                className="w-full h-48 object-cover"
              />

              {/* Blog Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
                  How to Master WordPress Themes
                </h3>

                {/* Short Description */}
                <p className="mt-4 text-gray-600">
                  Learn how to choose, customize, and manage WordPress themes
                  like a pro. A complete guide to enhancing your website's
                  design and functionality.
                </p>

                {/* Read More Button */}
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Blog;
