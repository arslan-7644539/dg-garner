import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { SearchContext } from "../components/SearchContext";


const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const url = "https://677692da12a55a9a7d0c32ef.mockapi.io/api/v1/blogs";
  const { searchInput } = useContext(SearchContext);



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


    // ===================================================

  // const searchQuerry = inputData
  // ? users.filter((user) =>
  //     user.name.toLowerCase().includes(inputData.toLowerCase())
  //   )
  // : users;

  // =======================================================

  const searchQuerry = searchInput
    ? blogData.filter((data) =>
        data.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : blogData;

  return (
    <>
     
      <Header />
>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {searchQuerry.map((data, index) => (
          <>
            <div
              key={index}
              className="max-w-sm mx-auto  bg-white rounded-lg shadow-lg overflow-hidden "
            >
              {/* Blog Image */}
              <img
                src="https://via.placeholder.com/400x200"
                alt="Blog Post"
                className="w-full h-48 object-cover"
              />

              {/* Blog Content */}
              <div className="p-6 ">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300 truncate w-50">
                  {data.title}
                </h3>

                {/* Short Description */}
                <p className="mt-4 text-gray-600 line-clamp-3 w-55">
                  {data.blogs}
                </p>

                {/* id */}
                {/* <h3 className=" font-sans font-extrabold">Product id: {data.id} </h3> */}

                {/* Read More Button */}
                <div className="mt-6">
                  <Link
                    to={`/blog/${data.title}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read More →
                  </Link>
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
