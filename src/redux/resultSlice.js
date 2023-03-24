import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    result: (_, action) => {
      return action.payload;
    },
  },
});

export const { result } = resultSlice.actions;
export default resultSlice.reducer;
