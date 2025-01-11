import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { SearchContext } from "../components/SearchContext";
import supabase from "../lib/supabase";
import SpinnerEffect from "../components/SpinnerEffect";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const url = "https://677692da12a55a9a7d0c32ef.mockapi.io/api/v1/blogs";
  const { searchInput } = useContext(SearchContext);

  const myBloges = async () => {
    setisLoading(true);
    const { data, error } = await supabase.from("Blogs").select("*");
    // console.log("🚀 ~ myBloges ~ data:", data);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      setBlogData(data);
      setisLoading(false);
    }
  };

  useEffect(() => {
    myBloges();
  }, []);

  // ====================================================================

  const searchQuerry = searchInput
    ? blogData.filter((data) =>
        data.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : blogData;
  // ====================================================================

  // ----------------------------------------------------------------------

  if (isLoading) {
    return (
    
        <div>
          <SpinnerEffect />
        </div>
      
    );
  } else {
    blogData;
  }
  // -----------------------------------------------------------------------
  return (
    <>
      <Header />
      <div>
        {isLoading ? (
          <SpinnerEffect />
        ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {searchQuerry.map((data, index) => (
              <>
                <div
                  key={index}
                  className="max-w-sm mx-auto  bg-white rounded-lg shadow-lg overflow-hidden "
                >
                  {/* Blog Image */}
                  <img
                    src={data.image}
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
                      {data.description}
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
        )}
      </div>

      <Footer />
    </>
  );
};

export default Blog;
