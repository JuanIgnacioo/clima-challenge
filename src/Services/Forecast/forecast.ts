import axios, { AxiosResponse } from "axios";
import { ForecastResponseType } from "./types";

const APIKEY = "8e53e412472e6e35ac928da4ed8cdd05";

const api = axios.create({
  // baseURL: "https://api.openweathermap.org",
  headers: {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers" : "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const getForecastFetching = (
  query: any
): Promise<AxiosResponse<ForecastResponseType>> => {
  return api.get(
    `/data/2.5/forecast?lat=${query.latitude}&lon=${query.longitude}&appid=${APIKEY}`
  );
};
