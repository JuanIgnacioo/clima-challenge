import React, { useCallback, useEffect } from "react";
import { Box, Center, Grid } from "@chakra-ui/react";
import { ForectasCityProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { actions as ForecastActions } from "../../Redux/forecast/actions";
import {
  getForecastData,
  getForecastFetching,
} from "../../Redux/forecast/selectors";
import WeatherCard from "../WeatherCard/WeatherCard";
import { ForecastType } from "../../Redux/forecast/types";
import CardContentLoader from "../ContentLoader/CardContentLoader";
import { getGeolocationFetching } from "../../Redux/geolocation/selectors";

export const ForecastCity: React.FC<ForectasCityProps> = ({ coordinates }) => {
  const dispatch = useDispatch();
  const fetchingForecast = useSelector(getForecastFetching);
  const fetchingCityName = useSelector(getGeolocationFetching);
  const forecast = useSelector(getForecastData);

  const callForecastRequest = useCallback(
    (la: string, lo: string) => {
      if (la === "" || lo === "") return null;
      dispatch(
        ForecastActions.getForecastRequest({ latitude: la, longitude: lo })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (coordinates)
      callForecastRequest(coordinates.latitude, coordinates.longitude);
  }, [callForecastRequest, coordinates]);

  return (
    <>
      <Box mt={5} padding="10px 50px">
        <Center>
          {fetchingForecast || fetchingCityName ? (
            <CardContentLoader />
          ) : (
            <Grid templateColumns="repeat(6, 1fr)" gap={15}>
              {forecast &&
                forecast.map((data: ForecastType, index: number) => {
                  return <WeatherCard dataWeather={data} key={index} />;
                })}
            </Grid>
          )}
        </Center>
      </Box>
    </>
  );
};

export default ForecastCity;
