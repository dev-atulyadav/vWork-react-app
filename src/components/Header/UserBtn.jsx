import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

export const UserBtn = () => {
  return (
    <>
      <span className="flex justify-center items-center text-xl border rounded-full border-black">
        <Link
          to="/login"
          className="rounded-full p-2.5 hover:bg-black duration-300 hover:text-white"
        >
          <FaUserAlt />
        </Link>
        <Link
          to="/my-cart"
          className="rounded-full p-2.5 hover:bg-black duration-300 hover:text-white"
        >
          <FaShoppingCart />
        </Link>
      </span>
    </>
  );
};
