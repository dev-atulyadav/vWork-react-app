import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    nav: "Home",
    path: "/",
  },
  {
    id: nanoid(),
    nav: "About",
    path: "/about",
  },
  {
    id: nanoid(),
    nav: "Service",
    path: "/service",
  },
  {
    id: nanoid(),
    nav: "Contact",
    path: "/contact",
  },
];

export const navSlice = createSlice({
  name: "navLinks",
  initialState,
});

export default navSlice.reducer;
