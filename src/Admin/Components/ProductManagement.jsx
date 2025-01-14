import React, { useContext, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { CardContext } from "../../components/CardContext";

const AdminProductTable = () => {
  const {cardData,} = useContext(CardContext)
  console.log("🚀 ~ AdminProductTable ~ cardData:", cardData)
  const [products, setProducts] = useState([
    { id: 1, title: "Product 1", price: 100, description: "Description 1", image: null },
    { id: 2, title: "Product 2", price: 200, description: "Description 2", image: null },
  ]);
  const [newProduct, setNewProduct] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    image: null,
  });
  const [isAdding, setIsAdding] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewProduct({ ...newProduct, image: file });
  };

  const handleAddProduct = () => {
    if (
      newProduct.id &&
      newProduct.title &&
      newProduct.price &&
      newProduct.description &&
      newProduct.image
    ) {
      setProducts([...products, { ...newProduct, price: parseFloat(newProduct.price) }]);
      setNewProduct({ id: "", title: "", price: "", description: "", image: null });
      setIsAdding(false);
      alert("Product added successfully!");
    } else {
      alert("Please fill in all fields and upload an image.");
    }
  };

  return (
    <>
    <AdminNavbar/>
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
         Production
      </h1>

      {/* Product Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-3 border border-gray-300">ID</th>
              <th className="px-4 py-3 border border-gray-300">Title</th>
              <th className="px-4 py-3 border border-gray-300">Price</th>
              <th className="px-4 py-3 border border-gray-300">Description</th>
           
            </tr>
          </thead>
          <tbody>
            {cardData.map((data, index) => (
              <tr
                key={data.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-100`}
              >
                <td className="px-4 py-3 border border-gray-300">{data.id}</td>
                <td className="px-4 py-3 border border-gray-300">{data.title}</td>
                <td className="px-4 py-3 border border-gray-300">
                  ${data.price}
                </td>
                <td className="px-4 py-3 border border-gray-300">
                  {data.description}
                </td>
            
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Show Add New Product Button */}
      {!isAdding && (
        <button
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setIsAdding(true)}
        >
          Add New Product
        </button>
      )}

      {/* Add New Product Section */}
      {isAdding && (
        <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Add New Product
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              name="id"
              value={newProduct.id}
              onChange={handleInputChange}
              placeholder="ID"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="title"
              value={newProduct.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              placeholder="Price"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-4 mt-4">
            <button
              className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleAddProduct}
            >
              Add
            </button>
            <button
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => setIsAdding(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default AdminProductTable;
