import React from "react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { UserBtn } from "./UserBtn";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 h-16 shadow-xl">
      <Logo />
      <div className="flex justify-center items-center gap-8">
        <Nav />
        <UserBtn />
      </div>
    </header>
  );
};
