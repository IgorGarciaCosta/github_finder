type SearchProps = {
  //func chamada loadUser que recebe uma string e retorna
  //uma promise void
  loadUser: (userName: string) => Promise<void>;
};

import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import classes from "./Search.module.css";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");
  return (
    <div className={classes.search}>
      <h2>Search user</h2>
      <p>repositiories</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Type account name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
