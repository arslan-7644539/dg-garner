import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ItemNotFound = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Item Not Found
        </h1>
        <p className="text-xl text-gray-600">
          Sorry, we couldn't find the item you're looking for.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ItemNotFound;
