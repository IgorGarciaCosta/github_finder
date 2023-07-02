import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div>
      <h2>Search user</h2>
      <p>repositiories</p>
      <div>
        <input type="text" placeholder="Type account name" />
        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
