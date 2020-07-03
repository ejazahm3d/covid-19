import { createSlice } from "@reduxjs/toolkit";
import {
  fetchDataByCountryOrDefault,
  fetchCountries,
  fetchDailyData,
} from "./actions";

export const covidSlice = createSlice({
  name: "covid-data",
  initialState: {
    loading: false,
    data: {},
    error: {},
  },
  reducers: {},
  extraReducers: {
    [fetchDataByCountryOrDefault.fulfilled]: (state, action) => {
      state["data"] = action.payload;
      state.loading = false;
    },
    [fetchDataByCountryOrDefault.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchDataByCountryOrDefault.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    loading: false,
    data: [],
    error: {},
  },
  reducers: {},
  extraReducers: {
    [fetchCountries.fulfilled]: (state, action) => {
      state["data"] = action.payload;
      state.loading = false;
    },
    [fetchCountries.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCountries.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const dailyDataSlice = createSlice({
  name: "daily-data",
  initialState: {
    loading: false,
    data: {},
    error: {},
  },
  reducers: {},
  extraReducers: {
    [fetchDailyData.fulfilled]: (state, action) => {
      state.loading = false;
      state["data"] = action.payload;
    },
    [fetchDailyData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchDailyData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
