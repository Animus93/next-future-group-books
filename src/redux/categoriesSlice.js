import { createSlice } from "@reduxjs/toolkit";

const initialState = "all";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categories: (_, action) => {
      return action.payload;
    },
  },
});

export const { categories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
