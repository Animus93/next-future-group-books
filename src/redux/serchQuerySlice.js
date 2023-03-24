import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const serchQuerySlice = createSlice({
  name: "serchQuery",
  initialState,
  reducers: {
    serchQuery: (_, action) => {
      return action.payload;
    },
  },
});

export const { serchQuery } = serchQuerySlice.actions;
export default serchQuerySlice.reducer;
