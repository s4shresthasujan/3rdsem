import { useState } from "react";
import cartItems from "../utils/productinfo";
import { Edit3, Trash2, ChevronRight } from "lucide-react";

function Listings() {
  const [showAll, setShowAll] = useState(false);
  const [items, setItems] = useState(cartItems);

  const displayedItems = showAll ? items : items.slice(0, 5);

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between px-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Your Listings</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900"
        >
          <span>{showAll ? "Show less" : "View all"}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col"
          >
            <div className="h-32 bg-gray-100">
              <img src={item.image} className="w-full h-full object-contain" />
            </div>

            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-900">
                    Rs.{item.price}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    item.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 text-sm">
                  <Edit3 className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex items-center space-x-1 text-gray-600 hover:text-red-600 text-sm"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;
