import { createSlice } from "@reduxjs/toolkit";
import {
  fetchDataByCountryOrDefault,
  fetchCountries,
  fetchDailyData,
} from "./actions";

//Covid-Data

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

// Countries
export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    selectedCountry: "",
    loading: false,
    data: [],
    error: {},
  },
  reducers: {
    updateCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
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

// Daily Data
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
