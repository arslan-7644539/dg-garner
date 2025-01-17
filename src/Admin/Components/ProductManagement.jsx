import React, { useContext } from "react";
import { CardContext } from "../../components/CardContext";

const AdminProductTable = () => {
  const { cardData } = useContext(CardContext);

  return (
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
                <td className="px-4 py-3 border border-gray-300">
                  {data.title}
                </td>
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
    </div>
  );
};

export default AdminProductTable;
