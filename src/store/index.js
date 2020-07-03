import {
  configureStore,
  createSlice,
  combineReducers,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://covid19.mathdro.id/api";

export const fetchDataByCountry = createAsyncThunk(
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

const covidSlice = createSlice({
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

const rootReducer = combineReducers({
  covidData: covidSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
