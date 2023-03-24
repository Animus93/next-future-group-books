import { createSlice } from "@reduxjs/toolkit";

const initialState = "0";

export const totalResultSlice = createSlice({
  name: "totalResult",
  initialState,
  reducers: {
    totalResult: (_, action) => {
      return action.payload;
    },
  },
});

export const { totalResult } = totalResultSlice.actions;
export default totalResultSlice.reducer;
