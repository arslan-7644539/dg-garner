import React, { useEffect, useState } from "react";
import { FaBox, FaPlusCircle } from "react-icons/fa";
import supabase from "../../lib/supabase";
import { Link } from "react-router-dom";

const TotalItemCard = () => {
  const [totalItems, setTotalItems] = useState(null);
  const TotalItem = async () => {
    const { data, error } = await supabase
      .from("Products")
      .select("*", { count: "exact" });

    // .single();
    if (error) {
      console.log(error);
    } else {
      // console.log("total num of item", data);
      setTotalItems(data.length);
    }
  };
  useEffect(() => {
    TotalItem();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Total Items</h2>
        <p className="text-lg text-gray-600"> {totalItems} </p>
      </div>
      <Link to="/superUser/production">
        <FaBox className=" cursor-pointer text-4xl text-blue-600" />
      </Link>
    </div>
  );
};

export default TotalItemCard;
