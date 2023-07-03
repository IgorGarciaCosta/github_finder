import React from "react";
import { UserProps } from "../types/Users";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}

      <div>
        <div>
          <p>Fellowers:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following:</p>
          <p>{following}</p>
        </div>
      </div>
      <Link to="/">Show best projects</Link>
    </div>
  );
};

export default User;
