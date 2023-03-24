import { createSlice } from "@reduxjs/toolkit";

const initialState = "relevance";

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sort: (_, action) => {
      return action.payload;
    },
  },
});

export const { sort } = sortSlice.actions;
export default sortSlice.reducer;
