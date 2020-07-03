import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { covidSlice } from "./slices";

const rootReducer = combineReducers({
  covidData: covidSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
