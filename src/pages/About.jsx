import React, { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

const About = () => {
  const { adminInfo } = useContext(AuthContext);
  return (
    <div className="bg-gray-50 py-8">
      <div>
        {/* Hero Section */}
        <section className="bg-blue-500 text-white py-20 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            Your trusted authorized dealer for premium WordPress themes &
            plugins
          </p>
        </section>

        {/* About Us Section */}
        <section className="container mx-auto py-16 px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Who We Are
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are an authorized dealer for premium WordPress themes and
            plugins, offering high-quality products at affordable prices. Our
            products are handpicked to ensure that they meet the latest
            standards in design, functionality, and performance.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            With years of experience in the WordPress ecosystem, we provide our
            customers with top-notch customer support and a seamless experience
            when purchasing themes and plugins. Whether you're a beginner or an
            experienced developer, we have the right products to help you build
            beautiful websites.
          </p>
        </section>

        {/* Our Partners Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Trusted Partners
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We work with industry-leading brands to bring you the best themes
              and plugins available.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              {/* Partner 1 */}
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <img
                  src="https://via.placeholder.com/150x50?text=Brand+1"
                  alt="Partner Brand 1"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Partner 2 */}
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <img
                  src="https://via.placeholder.com/150x50?text=Brand+2"
                  alt="Partner Brand 2"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Partner 3 */}
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <img
                  src="https://via.placeholder.com/150x50?text=Brand+3"
                  alt="Partner Brand 3"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Partner 4 */}
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <img
                  src="https://via.placeholder.com/150x50?text=Brand+4"
                  alt="Partner Brand 4"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Admin Contact Section */}
        <section className="bg-blue-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              Contact The Admin
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              For any inquiries, support, or business opportunities, feel free
              to reach out to our admin.
            </p>
            <div className="mt-8">
              <div className="text-xl font-semibold text-gray-800">
                {adminInfo.username}
              </div>
              <div className="text-lg text-gray-600 mt-2">Admin</div>
              <div className="mt-4 text-gray-600">
                Email:{" "}
                <a
                  href={adminInfo.email}
                  className="text-blue-600 hover:text-blue-700"
                >
                  {adminInfo.email}
                </a>
              </div>
              <div className="mt-2 text-gray-600">
                Location: Faisalabad, Pakistan
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
