import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import supabase from "../lib/supabase";
import toast from "react-hot-toast";
import { AuthContext } from "../components/AuthContext";

const Contact = () => {
  const {session} = useContext(AuthContext)
  // console.log("🚀 ~ Contact ~ session:", session)
  const uid = session?.user?.id
  // console.log("🚀 ~ Contact ~ uid:", uid)
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
    uid: uid || "",
  });
  // debugger
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Messages")
      .insert([
        {
          Name: feedback.name,
          Email: feedback.email,
          Message: feedback.message,
          UID: feedback.uid
        },
      ])
      .select();
    console.log("🚀 ~ handleSubmit ~ data:", data)
    if (error) {
      console.log(error);
      toast.error("Something went wrong!", {
        position: "top-right",
      });
    } else {
      console.log(data);
      toast.success("Successfully submit your message", {
        position: "top-right",
      });
      setFeedback({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  useEffect(() => {
    if(session?.user?.id){
      setFeedback({uid: uid  })
    }
    
    // setFeedback()
  }, [session])
  

  return (
    <div>
      <Header />
      <div className="bg-gray-50 py-8">
        {/* Hero Section */}
        <section className="bg-blue-500 text-white py-20 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">
            We'd love to hear from you! Get in touch with us today.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="container mx-auto py-16 px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Have any questions or need support? Fill out the form below, and we
            will get back to you as soon as possible.
          </p>
          <div className="mt-8 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-800"
                >
                  Your Name
                </label>
                <input
                  onChange={(e) =>
                    setFeedback({ ...feedback, name: e.target.value })
                  }
                  value={feedback.name}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-2 w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-800"
                >
                  Your Email
                </label>
                <input
                  onChange={(e) =>
                    setFeedback({ ...feedback, email: e.target.value })
                  }
                  value={feedback.email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-800"
                >
                  Your Message
                </label>
                <textarea
                  onChange={(e) =>
                    setFeedback({ ...feedback, message: e.target.value })
                  }
                  value={feedback.message}
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                  className="mt-2 w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Contact Details
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Feel free to reach us through the following contact information.
              We look forward to hearing from you!
            </p>
            <div className="mt-8 text-lg text-gray-600">
              <div className="mb-4">
                <strong className="text-gray-800">Email:</strong>{" "}
                <a
                  href="mailto:arslan7644539@gmail.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  arslan7644539@gmail.com
                </a>
              </div>
              <div className="mb-4">
                <strong className="text-gray-800">Phone:</strong>{" "}
                <a
                  href="tel:+923267644539"
                  className="text-blue-600 hover:text-blue-700"
                >
                  +92 326 7644539
                </a>
              </div>
              <div className="mb-4">
                <strong className="text-gray-800">Location:</strong> Faisalabad,
                Pakistan
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
