import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Nav = () => {
  const navLinks = useSelector((state) => state.navLinks);
  console.log(navLinks);
  return (
    <nav>
      <ul className="flex justify-center items-center gap-4 uppercase font-semibold">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}
            className="hover:bg-black hover:text-white px-4 py-3 duration-300 rounded-xl"
            >{link.nav}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
