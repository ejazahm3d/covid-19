import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://covid19.mathdro.id/api";
const BASE_URL_2nd = "https://api.covid19api.com";

//Covid-Data
export const fetchDataByCountryOrDefault = createAsyncThunk(
  "covid-data/fetchDataByCountry",
  async (country, thunkAPI) => {
    try {
      if (!country) {
        const response = await axios.get(BASE_URL);
        return response.data;
      } else {
        const response = await axios.get(`${BASE_URL}/countries/${country}`);
        return response.data;
      }
    } catch (error) {
      return error.data;
    }
  }
);

//Global-Summary
export const fetchGlobalSummaryData = createAsyncThunk(
  "global-summary/fetchGlobalSummaryData",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL_2nd}/summary`);
      return response.data;
    } catch (error) {
      return error.data;
    }
  }
);

//Countries
export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async (thunkAPI) => {
    try {
      const {
        data: { countries },
      } = await axios.get(`${BASE_URL}/countries`);

      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  }
);

export const updateCountry = createAction("countries/updateCountry");

// Daily-Data
export const fetchDailyData = createAsyncThunk(
  "daily-data/fetchDailyData",
  async (country, thunkAPI) => {
    try {
      if (!country) {
        const { data } = await axios.get(`${BASE_URL}/daily`);

        return data.map(
          ({ confirmed, deaths, recovered, reportDate: date }) => ({
            confirmed: confirmed.total,
            deaths: deaths.total,
            date,
          })
        );
      } else {
        const { data } = await axios.get(
          `${BASE_URL_2nd}/total/dayone/country/${country}`
        );
        return data.map(({ Confirmed, Deaths, Recovered, Date: date }) => ({
          confirmed: Confirmed,
          deaths: Deaths,
          date,
        }));
      }
    } catch (error) {
      return error;
    }
  }
);
