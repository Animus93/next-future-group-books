import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const pageIndexSlice = createSlice({
  name: "pageIndex",
  initialState,
  reducers: {
    pageIndex: (_, action) => {
      return action.payload;
    },
  },
});

export const { pageIndex } = pageIndexSlice.actions;
export default pageIndexSlice.reducer;
