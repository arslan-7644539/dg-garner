import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ItemNotFound = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          404 Page Not Found
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default ItemNotFound;
