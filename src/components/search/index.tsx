import React from "react";
import "./index.css";

function SearchBar() {
  const [query, setQuery] = React.useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("search working!!");
    const redirectUrl = `https://www.google.com/search?q=${query}`;

    window.location.replace(redirectUrl);
  };

  return (
    <div className="search_container bar">
      <input
        type="text"
        className="searchbar"
        placeholder="Enter you query here"
        onChange={(e) => setQuery(e.target.value)}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 search-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        onClick={(e) => handleSearch(e)}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}

export default SearchBar;
