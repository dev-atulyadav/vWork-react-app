import React from "react";
import Globe from "../Globe/Globe";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex justify-center items-center p-20">
      {/* <section className="w-full">
        <article>
          <main className="h-[40rem]">
            <Globe />
          </main>
        </article>
      </section> */}
      <Outlet />
    </div>
  );
};
