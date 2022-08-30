export const getWeatherIcon = (icon: string) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;

export const getTimestampWeekDay = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleDateString();
};
