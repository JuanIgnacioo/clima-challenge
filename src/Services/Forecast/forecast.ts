import { AxiosResponse } from "axios";
import { api } from "../api";
import { ForecastResponseType } from "./types";

const APIKEY = "8e53e412472e6e35ac928da4ed8cdd05";
export const getForecastFetching = (
  query: any
): Promise<AxiosResponse<ForecastResponseType>> => {
  return api.get(
    `/data/2.5/onecall?lat=${query.latitude}&lon=${query.longitude}&appid=${APIKEY}&units=metric&exclude=minutely,hourly`
  );
};
