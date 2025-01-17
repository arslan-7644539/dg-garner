import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardContext } from "../components/CardContext";
import OrderForm from "../components/OrderForm";
import { AuthContext } from "../components/AuthContext";
import toast from "react-hot-toast";

const ShopNow = () => {
  const navigate = useNavigate();
  const { session } = useContext(AuthContext);
  const uid = session?.user?.id;

  const { cardData } = useContext(CardContext);

  const { ShopNow } = useParams();

  const [showForm, setShowForm] = useState(false); // Manage form visibility

  const cardResult = cardData.filter((card) => card.title === ShopNow);

  if (cardResult.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Item Not Found
        </h1>
        <p className="text-xl text-gray-600">
          Sorry, we couldn't find the item you're looking for.
        </p>
      </div>
    );
  }

  const itemTitle = cardResult[0].title;

  const handleBuyNowClick = () => {
    if (session !== null) {
      setShowForm(true);
    } else {
      toast.error("Please SignUP.", {
        position: "top-right",
      });

      navigate("/signup");
    }
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 px-5">
        {cardResult.map((card, index) => (
          <>
            {/* Left Side: Product Image and Details */}
            <div
              key={`left-${index}`}
              className="lg:col-span-7  rounded-lg  overflow-hidden"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {card.title}
                </h3>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  {card.description}
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {card.price}
                </p>
              </div>
            </div>

            {/* Right Side: Purchase Section */}
            <div
              key={`right-${index}`}
              className={`lg:col-span-5  rounded-lg  p-6 flex flex-col justify-center transition-all duration-500 ease-in-out ${
                showForm ? "" : "h-auto"
              }`}
            >
              {showForm ? (
                <OrderForm itemTitle={itemTitle} uid={uid} />
              ) : (
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Ready to Purchase?
                  </h3>
                  <button
                    onClick={handleBuyNowClick}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Buy Now
                  </button>
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ShopNow;
