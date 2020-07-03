import { createSlice } from "@reduxjs/toolkit";
import { fetchDataByCountry } from "./actions";

export const covidSlice = createSlice({
  name: "covid-data",
  initialState: {
    loading: false,
    data: {},
    error: {},
  },
  reducers: {},
  extraReducers: {
    [fetchDataByCountry.fulfilled]: (state, action) => {
      state["data"] = action.payload;
      state.loading = false;
    },
    [fetchDataByCountry.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchDataByCountry.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
