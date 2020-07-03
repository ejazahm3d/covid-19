import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { covidSlice, countriesSlice, dailyDataSlice } from "./slices";

const rootReducer = combineReducers({
  covidData: covidSlice.reducer,
  countries: countriesSlice.reducer,
  dailyData: dailyDataSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
