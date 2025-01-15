import React, { useState } from "react";
import AdminNavbar from "../Components/AdminNavbar";
import supabase from "../../lib/supabase";
import toast from "react-hot-toast";

const AddItems = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    Id: "",
  });

  const handleChange =  (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
    .from('Products')
    .insert([
      {
        title: formData.title,
        price: formData.price,
        imageUrl: formData.image,
        description: formData.description,
        product: formData.Id,
      },
    ])
    .select()
          if(error){
            console.log(error);
            
          }  else{
            console.log(data);
            toast.success('New Item Added!', {
                position:"top-right"
              })
            
          }
  
      setFormData({
        title: "",
        price: "",
        imageUrl: "",
        description: "",
        productId: "",
      });
    
  };


  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Add New Product
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Title and ID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-lg font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter the product title"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="productId" className="text-lg font-medium text-gray-700">
                  Product ID
                </label>
                <input
                  type="text"
                  id="Id"
                  name="Id"
                  value={formData.Id}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter the product ID"
                  required
                />
              </div>
            </div>

            {/* Price and Image URL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="price" className="text-lg font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter the product price"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="imageUrl" className="text-lg font-medium text-gray-700">
                  Image 
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter the product image URL"
                />
              </div>
            </div>

            {/* Product Description */}
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-lg font-medium text-gray-700">
                 Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="6"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write the product description here..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


export default AddItems;
