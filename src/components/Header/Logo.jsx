import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <img src="https://via.placeholder.com/50" alt="Logo" />
      {/* <h1>Logo</h1> */}
    </Link>
  );
};
