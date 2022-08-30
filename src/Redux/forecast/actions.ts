import { createSlice } from "@reduxjs/toolkit";
import { getForecastState } from "./types";

const initialState: getForecastState = {
  forecast: [],
  currentForecast: {
    feels_like: 0,
    temp: 0,
    weather: {
      id: 0,
      main: "",
      description: "",
      icon: "",
    },
  },
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
      // state.city = action.payload.city.name;

      state.currentForecast.feels_like = action.payload.current.feels_like;
      state.currentForecast.temp = action.payload.current.temp;
      state.currentForecast.weather.id = action.payload.current.weather[0].id;
      state.currentForecast.weather.main =
        action.payload.current.weather[0].main;
      state.currentForecast.weather.description =
        action.payload.current.weather[0].description;
      state.currentForecast.weather.icon =
        action.payload.current.weather[0].icon;
      state.forecast = action.payload.daily.slice(0, 6);
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
