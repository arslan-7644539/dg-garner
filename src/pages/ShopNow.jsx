import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {  useParams } from "react-router-dom";
import { CardContext } from "../components/CardContext";

const ShopNow = () => {
  const { cardData } = useContext(CardContext);
  console.log("🚀 ~ ShopNow ~ cardData:", cardData)
  //   console.log(cardData);
  const { ShopNow } = useParams();
  console.log("🚀 ~ ShopNow ~ ShopNow:", ShopNow)


  const cardResult = cardData.filter((card) => card.title === ShopNow );

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center mt-20 mb-20 ">
        {cardResult.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-[30%]  m-auto "
          >
            <img
              src={card.imageUrl}
              alt="Premium WordPress Theme"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="mt-4 text-gray-600">{card.description}</p>
              <p className="mt-4 text-xl font-semibold text-green-600">
                {card.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ShopNow;
