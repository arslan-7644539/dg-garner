import React from "react";
import { Link } from "react-router-dom";

const MyCards = ({ price, title, imageUrl, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt="Premium WordPress Theme"
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-4 text-gray-600">{description}</p>
        <p className="mt-4 text-xl font-semibold text-green-600">{price}</p>
        <Link
          to={`/${title}`}
          className="mt-4 inline-block text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default MyCards;
