export interface getForecastState {
  forecast: ForecastType[];
  currentForecast: CurrentForecastType;
  city: string;
  date: string;
  fetching: boolean;
  error: string;
}

export type CurrentForecastType = {
  feels_like: number;
  temp: number;
  weather: WeatherType;
};

export type ForecastType = {
  clouds: CloudsType;
  dt: number;
  dt_txt: string;
  main: MainType;
  pop: number;
  visibility: number;
  temp: TempType;
  humidity: number;
  weather: WeatherType[];
};

export type CloudsType = {
  all: number;
};

export type TempType = {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
};

export type MainType = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
  weather: WeatherType[];
  wind: WindType;
};

export type WeatherType = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WindType = {
  deg: number;
  gust: number;
  speed: number;
};
