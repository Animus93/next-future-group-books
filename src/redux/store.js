import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import loaderSlice from "./loaderSlice";
import pageIndexSlice from "./pageIndexSlice";
import resultSlice from "./resultSlice";
import serchQuerySlice from "./serchQuerySlice";
import sortSlice from "./sortSlice";
import totalResultSlice from "./totalResultSlice";

const rootReducer = combineReducers({
  serchQuery: serchQuerySlice,
  categories: categoriesSlice,
  sort: sortSlice,
  result: resultSlice,
  totalResult: totalResultSlice,
  pageIndex: pageIndexSlice,
  loader: loaderSlice
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
