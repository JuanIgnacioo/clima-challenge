import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectSelf = (state: any) => state;

export const getCityName = createDraftSafeSelector(
  selectSelf,
  (state) => state.geolocation.cityName
);

export const getGeolocationFetching = createDraftSafeSelector(
  selectSelf,
  (state) => state.geolocation.fetching
);
