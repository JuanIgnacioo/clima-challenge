import axios from "axios";

export const api = axios.create({
  // baseURL: "https://api.openweathermap.org",
  headers: {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
