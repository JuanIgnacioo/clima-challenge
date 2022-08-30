import { createSlice } from "@reduxjs/toolkit";
import { getGeolocationState } from "./types";

const initialState: getGeolocationState = {
  cityName: "",
  fetching: true,
  error: "",
};

export const geolocationSlice = createSlice({
  name: "geolocation",
  initialState,
  reducers: {
    getGeolocationRequest(state, action) {
      state.fetching = true;
    },
    getGeolocationSuccess(state, action) {
      state.cityName = action.payload[0].name;
      state.fetching = false;
    },
    getGeolocationError(state, action) {
      state.error = action.payload.error;
    },
  },
  extraReducers: {},
});

export const { actions } = geolocationSlice;

export default geolocationSlice.reducer;
