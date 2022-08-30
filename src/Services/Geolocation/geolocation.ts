import { AxiosResponse } from "axios";
import { api } from "../api";
import { GeolocationResponseType } from "./types";

const APIKEY = "8e53e412472e6e35ac928da4ed8cdd05";
export const getForecastFetching = (
  query: any
): Promise<AxiosResponse<GeolocationResponseType>> => {
  
  return api.get(
    `/geo/1.0/reverse?lat=${query.latitude}&lon=${query.longitude}&limit=5&appid=${APIKEY}&limit=1`
  );
};
