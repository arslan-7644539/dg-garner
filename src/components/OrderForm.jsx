import React, { useState } from "react";
import supabase from "../lib/supabase";

const OrderForm = ({ itemTitle }) => {
  console.log("🚀 ~ OrderForm ~ itemTitle:", itemTitle);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    itemTitle: itemTitle || "",
  });
  console.log("🚀 ~ OrderForm ~ formData:", formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic
    console.log(formData);

    const { data, error } = await supabase
      .from("DG-Garner")
      .insert([
        {
          title: formData.itemTitle,
          email: formData.email,
          address: formData.address,
          fullName: formData.fullName,
        },
      ])

      .select();
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }

    alert("Your order has been placed!");
    setFormData({
      fullName: "",
      email: "",
      address: "",
      itemTitle: itemTitle || "",
    });
  };

  return (
    <form
      className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mt-6"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Order Details</h3>

      {/* Full Name Field */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Address Field */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-bold shadow-md hover:bg-green-700 transition w-full"
      >
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;
