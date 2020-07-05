import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  covidSlice,
  countriesSlice,
  dailyDataSlice,
  globalSummarySlice,
} from "./slices";

const rootReducer = combineReducers({
  covidData: covidSlice.reducer,
  countries: countriesSlice.reducer,
  dailyData: dailyDataSlice.reducer,
  globalSummary: globalSummarySlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
