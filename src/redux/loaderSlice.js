import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    loader: (_, action) => {
      return action.payload;
    },
  },
});

export const { loader } = loaderSlice.actions;
export default loaderSlice.reducer;
