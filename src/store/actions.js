import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://covid19.mathdro.id/api";

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

export const fetchDailyData = createAsyncThunk(
  "daily-data/fetchDailyData",
  async (thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/daily`);

      return data.map(({ confirmed, deaths, reportDate: date }) => ({
        confirmed: confirmed.total,
        deaths: deaths.total,
        date,
      }));
    } catch (error) {
      return error;
    }
  }
);
