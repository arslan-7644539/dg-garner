import React, { useState, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { CardContext } from "../components/CardContext";
import OrderForm from "../components/OrderForm";

const ShopNow = () => {
  const { cardData } = useContext(CardContext);

  const { ShopNow } = useParams();

  const [showForm, setShowForm] = useState(false); // Manage form visibility

  const cardResult = cardData.filter((card) => card.title === ShopNow);
  console.log("🚀 ~ ShopNow ~ cardResult:", cardResult)
 
  const itemTitle = cardResult[0].title;


  const handleBuyNowClick = () => {
    
    setShowForm(true); // Show the order form when Buy Now is clicked
  };


  return (
    <div>
      <Header /> {/* Fixed Header */}
      {/* Main Content Area */}
      <div className="flex justify-between items-start min-h-screen  px-5 pt-[100px] pb-[10px]">
        {cardResult.map((card, index) => (
          <>
            {/* Left Side: Card with Border */}
            <div
              key={`left-${index}`}
              className="md:w-full md:max-h-full bg-white  rounded-lg overflow-hidden "
            >
              <img
                src={card.imageUrl}
                alt="Premium WordPress Theme"
                className="w-full h-64 object-cover"
              />
              <br />  <br /> 
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 text-center">
                  {card.title}
                </h3>
                <p className="mt-4 text-center  text-gray-600">{card.description}</p>
                <p className="mt-4 text-xl text-center font-semibold text-green-600">
                  {card.price}
                </p>
              </div>
            </div>

            {/* Right Side: Dynamic Section */}
            <div
              key={`right-${index}`}
              className={`${
                showForm
                  ? "w-[30%] p-6  bg-white  animate-fadeIn"
                  : "w-[30%] h-64 flex items-center justify-center border bg-white shadow-lg rounded-lg"
              } transition-all duration-500 ease-in-out`}
            >
              {showForm ? (
                <OrderForm itemTitle={itemTitle} /> // Show the order form if showForm is true
              ) : (
                <>
                  <button
                    onClick={handleBuyNowClick}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
                  >
                    Buy Now
                  </button>
                </>
              )}
            </div>
          </>
        ))}
      </div>
      <Footer /> {/* Relative Footer */}
    </div>
  );
};

export default ShopNow;
