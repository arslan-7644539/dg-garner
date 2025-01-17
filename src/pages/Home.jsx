import React, { useContext } from "react";
import MyCards from "../components/MyCards";
import { CardContext } from "../components/CardContext";
import SpinnerEffect from "../components/SpinnerEffect";
import { SearchContext } from "../components/SearchContext";

const Home = () => {
  const { cardData, loading } = useContext(CardContext);
  const { searchInput } = useContext(SearchContext);

  const searchQuerry = searchInput
    ? cardData.filter((data) =>
        data.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : cardData;

  return (
    <div>
      {loading ? (
        <SpinnerEffect />
      ) : (
        <div className="bg-gray-50 py-8 ">
          {/* Hero Section */}
          <section className="bg-blue-500 text-white py-20 text-center">
            <h1 className="text-4xl font-bold">
              WordPress Paid Themes & Plugins for Sale
            </h1>
            <p className="mt-4 text-lg">
              Get premium themes and plugins at unbeatable prices!
            </p>
          </section>

          {/* Featured Themes and Plugins Section */}
          <section className="container mx-auto py-16 px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Our Best Selling Products
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {searchQuerry.map((item) => (
                <MyCards
                  key={item.product}
                  price={item.price}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  description={item.description}
                />
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="bg-white py-16">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold text-gray-800">
                Why Choose Us?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We provide high-quality WordPress themes and plugins at
                competitive prices. Our products are carefully selected to
                ensure premium features, support, and performance.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    High Quality
                  </h3>
                  <p className="mt-4 text-gray-600">
                    All our products are tested for performance, security, and
                    ease of use to ensure that they meet your expectations.
                  </p>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Affordable Prices
                  </h3>
                  <p className="mt-4 text-gray-600">
                    We offer competitive prices for premium products. Get the
                    best value without compromising on quality.
                  </p>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    24/7 Support
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Our team is always available to help you with any issues. We
                    ensure smooth integration and functionality of your
                    products.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="bg-blue-500 text-white py-8 text-center">
            <h3 className="text-2xl font-semibold">Get Started Today!</h3>
            <p className="mt-4 text-lg">
              Start building your website with our premium themes and plugins
              now. Shop with confidence!
            </p>
            <a
              href="/shop"
              className="mt-6 inline-block text-white bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700"
            >
              Shop Now
            </a>
          </section>
        </div>
      )}
    </div>
  );
};

export default Home;
