import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectSelf = (state: any) => state;

export const getForecastData = createDraftSafeSelector(
  selectSelf,
  (state) => state.forecast.forecast,
);

export const getForecastFetching = createDraftSafeSelector(
  selectSelf,
  (state) => state.forecast.fetching,
);


