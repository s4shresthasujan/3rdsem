import React, { useState } from "react";
import { Search } from "lucide-react";
import cartItems from "../utils/productinfo";

function NavBar({ onSearchResults }) {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [searchResultCount, setSearchResultCount] = useState(null);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      const query = inputValue.toLowerCase().trim();

      const results = cartItems.filter((item) =>
        item.name.toLowerCase().includes(query)
      );

      setSearchResultCount(results.length);
      setSubmittedValue(inputValue);

      onSearchResults(results);
    }
  }

  return (
    <>
      <div className="relative max-w-md mx-auto mt-3">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search an item"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {searchResultCount !== null && (
        <div className="text-center mt-4">
          <p className="text-gray-400">
            {searchResultCount === 1
              ? `1 item found for "${submittedValue}"`
              : `${searchResultCount} item${
                  searchResultCount === 0 ? "" : "s"
                } found for "${submittedValue}"`}
          </p>
        </div>
      )}
    </>
  );
}

export default NavBar;
