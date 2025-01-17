import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../lib/supabase";

const BlogPost = () => {
  const [newBlogData, setNewBlogData] = useState([]);
  const { title } = useParams();

  const myBloges = async () => {
    const { data, error } = await supabase.from("Blogs").select("*");
    if (error) {
      console.error(error);
    } else {
      const blogPost = data.filter((blog) => blog.title === title);
      setNewBlogData(blogPost);
    }
  };

  useEffect(() => {
    myBloges();
  }, [title]);

  return (
    <div className="container mx-auto px-4 py-8">
      {newBlogData.length > 0 ? (
        newBlogData.map((blog, index) => (
          <div key={index} className="max-w-4xl mx-auto mb-12">
            <article className="overflow-hidden rounded-lg shadow-lg bg-white">
              <img
                alt={blog.title}
                src={blog.image}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {blog.title}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {blog.description}
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <img
                    alt="author"
                    src={blog.authorImage}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      {blog.author}
                    </p>
                    <p className="text-sm text-gray-500">{blog.created_at}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 text-xl">No blog post found.</p>
      )}
    </div>
  );
};

export default BlogPost;
