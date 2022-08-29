import { createSlice } from "@reduxjs/toolkit";
import { getForecastState } from "./types";

const initialState: getForecastState = {
  forecast: [],
  fetching: false,
  city: "",
  date: "",
  error: "",
};

export const forecastSlice = createSlice({
  name: "pronostico",
  initialState,
  reducers: {
    getForecastRequest(state, action) {
      
      state.fetching = true;
    },
    getForecastSuccess(state, action) {
      console.log(action);
      // state.city = action.payload.city.name;
      state.forecast = action.payload.daily.slice(0,6)
      state.fetching = false;
    },
    getForecastError(state, action) {
      state.error = action.payload.error;
    },
  },
  extraReducers: {},
});

export const { actions } = forecastSlice;

export default forecastSlice.reducer;
