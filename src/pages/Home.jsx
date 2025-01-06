import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-50 py-8 ">

{/* Hero Section */}
<section className="bg-blue-500 text-white py-20 text-center">
  <h1 className="text-4xl font-bold">WordPress Paid Themes & Plugins for Sale</h1>
  <p className="mt-4 text-lg">Get premium themes and plugins at unbeatable prices!</p>
</section>

{/* Featured Themes and Plugins Section */}
<section className="container mx-auto py-16 px-6">
  <h2 className="text-3xl font-semibold text-center text-gray-800">Our Best Selling Products</h2>
  <div className="grid md:grid-cols-3 gap-8 mt-8">
    {/* Product 1: Theme */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src="https://img.freepik.com/free-psd/smiley-woman-wearing-sunglasses-landing-page-template_23-2148782097.jpg?t=st=1736100689~exp=1736104289~hmac=cd4b6a8904179ee43f4980245d2b36750c47914f6cd43b11a5a423c65fdb1018&w=1060"
        alt="Premium WordPress Theme"
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">Premium WordPress Theme</h3>
        <p className="mt-4 text-gray-600">
          A beautifully designed theme with fast performance and customizable options. Perfect for any website.
        </p>
        <p className="mt-4 text-xl font-semibold text-green-600">$39.99</p>
        <a
          href="/buy"
          className="mt-4 inline-block text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Buy Now
        </a>
      </div>
    </div>

    {/* Product 2: Plugin */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src="https://img.freepik.com/free-psd/design-landing-page-template_23-2148947823.jpg?t=st=1736100895~exp=1736104495~hmac=a1d1c5d717734ca8d42c8b04b91928bfb1290b92f08540f707858be1d4cf918d&w=1060"
        alt="WordPress Plugin"
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">Powerful WordPress Plugin</h3>
        <p className="mt-4 text-gray-600">
          Enhance your website’s functionality with this powerful plugin. Easy installation and full support.
        </p>
        <p className="mt-4 text-xl font-semibold text-green-600">$19.99</p>
        <a
          href="/buy"
          className="mt-4 inline-block text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Buy Now
        </a>
      </div>
    </div>

    {/* Product 3: Theme */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src="https://img.freepik.com/free-psd/wellness-concept-landing-page-template_23-2150094962.jpg?t=st=1736100761~exp=1736104361~hmac=00136a452a9f0af57588fa33136dae939f44d0aa2d777897f09b7874ad3e4b2d&w=1060"
        alt="Creative WordPress Theme"
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">Creative WordPress Theme</h3>
        <p className="mt-4 text-gray-600">
          A theme designed for creative portfolios and agencies. Beautiful layouts and fast loading times.
        </p>
        <p className="mt-4 text-xl font-semibold text-green-600">$49.99</p>
        <a
          href="/buy"
          className="mt-4 inline-block text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Buy Now
        </a>
      </div>
    </div>
  </div>
</section>

{/* Why Choose Us Section */}
<section className="bg-white py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
    <p className="mt-4 text-lg text-gray-600">
      We provide high-quality WordPress themes and plugins at competitive prices. Our products are carefully selected to ensure premium features, support, and performance.
    </p>
    <div className="grid md:grid-cols-3 gap-8 mt-8">
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800">High Quality</h3>
        <p className="mt-4 text-gray-600">
          All our products are tested for performance, security, and ease of use to ensure that they meet your expectations.
        </p>
      </div>
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800">Affordable Prices</h3>
        <p className="mt-4 text-gray-600">
          We offer competitive prices for premium products. Get the best value without compromising on quality.
        </p>
      </div>
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800">24/7 Support</h3>
        <p className="mt-4 text-gray-600">
          Our team is always available to help you with any issues. We ensure smooth integration and functionality of your products.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Call to Action Section */}
<section className="bg-blue-500 text-white py-8 text-center">
  <h3 className="text-2xl font-semibold">Get Started Today!</h3>
  <p className="mt-4 text-lg">Start building your website with our premium themes and plugins now. Shop with confidence!</p>
  <a
    href="/shop"
    className="mt-6 inline-block text-white bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700"
  >
    Shop Now
  </a>
</section>

</div>
      <Footer />
    </div>
  );
};

export default Home;
