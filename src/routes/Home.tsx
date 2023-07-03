//rafce
import React, { useState } from "react";
import Search from "../components/search";
import { UserProps } from "../types/users";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = res.json();

    console.log(data);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
    </div>
  );
};

export default Home;
