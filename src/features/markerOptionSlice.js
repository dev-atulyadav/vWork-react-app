import { createSlice } from "@reduxjs/toolkit";

const initalState = [{}];

export const markerOptionSlice = createSlice({
  name: "markerOption",
  initialState: initalState,
});

export default markerOptionSlice.reducer;
