import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import supabase from "../lib/supabase";

const BlogPost = () => {
  const [newBlogData, setNewBlogData] = useState([]);
  const url = "https://677692da12a55a9a7d0c32ef.mockapi.io/api/v1/blogs";
  const { title } = useParams();
  // const location = useLocation()

  // ---------------=================-------------------------------------------

  // async function newUser() {
  //   try {
  //     const response = await axios.get(url);
  //     const blogsData = response.data;
  //     const filterBlogs = blogsData.filter((blog) => blog.title === title);
  //     setNewBlogData(filterBlogs);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   newUser();
  // }, [title]);

  // ------------------=================================================================

  const myBloges = async () => {
    const { data, error } = await supabase.from("Blogs").select("*");
    console.log("🚀 ~ myBloges ~ data:", data);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      const blogPost = data.filter((blog) => blog.title === title);
      setNewBlogData(blogPost);
    }
  };
  useEffect(() => {
    myBloges();
  }, [title]);

  // ----------------=================------------------------------------------

  return (
    <div>
      <Header />
      {newBlogData.map((bloge, index) => (
        <div key={index}>
          <article className=" group mt-32 w-full container mx-auto flex flex-col items-center ">
            <img
              alt=""
              src={bloge.image}
              className="h-56 w-[80%] rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] "
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                  {bloge.title}
                </h3>
              </a>

              <p className="mt-2  text-sm/relaxed text-gray-500">
                {bloge.description}
              </p>
            </div>
          </article>
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default BlogPost;
