import { createSlice } from "@reduxjs/toolkit";
import { getForecastState } from "./types";

const initialState: getForecastState = {
  forecast: [],
  fetching: false,
  error: "",
};

export const forecastSlice = createSlice({
  name: "pronostico",
  initialState,
  reducers: {
    getForecastRequest(state, action) {
      console.log("se ejecuto request");
      state.fetching = true;
    },
    getForecastSuccess(state, action) {
      console.log(action);
      state.forecast = action.payload.result;
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
