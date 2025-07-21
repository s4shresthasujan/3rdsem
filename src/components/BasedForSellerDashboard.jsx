import { ChevronRight } from "lucide-react";
import cartItems from "../utils/productinfo";
import { useState } from "react";

function BasedonYourActivity() {
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);

  // Slice the array depending on toggle state
  const displayedRecommendations = showAllRecommendations
    ? cartItems
    : cartItems.slice(0, 5);

  return (
    <div className="mb-10 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Based on Your Activity
        </h2>
        <button
          onClick={() => setShowAllRecommendations(!showAllRecommendations)}
          className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900"
        >
          <span>{showAllRecommendations ? "Show less" : "View all"}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div
        className={`grid gap-6 ${
          showAllRecommendations
            ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            : "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        }`}
      >
        {displayedRecommendations.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-sm transition-shadow"
          >
            <div className="h-32 bg-gray-100">
              <img src={item.image} className="w-full h-full object-contain" />
            </div>

            <div className="p-4">
              <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                {item.category}
              </div>
              <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
              <p className="text-lg font-semibold text-gray-900">
                Rs.{item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasedonYourActivity;
