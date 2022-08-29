import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectSelf = (state: any) => state;

export const getForecastData = createDraftSafeSelector(
  selectSelf,
  (state) => state.pronostico.forecast
);

export const getForecastFetching = createDraftSafeSelector(
  selectSelf,
  (state) => state.pronostico.fetching
);

export const getCityName = createDraftSafeSelector(
  selectSelf,
  (state) => state.pronostico.city
);
