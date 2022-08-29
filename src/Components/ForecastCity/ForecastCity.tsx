import React, { useCallback, useEffect } from "react";
import { Box, Center, Grid, Text } from "@chakra-ui/react";
import { ForectasCityProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { actions as ForecastActions } from "../../Redux/forecast/actions";
import { getCityName, getForecastData } from "../../Redux/forecast/selectors";
import WeatherCard from "../WeatherCard/WeatherCard";
import { ForecastType } from "../../Redux/forecast/types";

export const ForecastCity: React.FC<ForectasCityProps> = ({
  latitude,
  longitude,
}) => {
  const dispatch = useDispatch();
  // const cityName = useSelector(getCityName);
  const forecast = useSelector(getForecastData);

  const callForecastRequest = useCallback(
    (la: string, lo: string) => {
      dispatch(
        ForecastActions.getForecastRequest({ latitude: la, longitude: lo })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (latitude && longitude) callForecastRequest(latitude, longitude);
  }, [callForecastRequest, latitude, longitude]);

  return (
    <>
      <Box mt={5} padding='0px 50px'>
        <Center>
          <Grid templateColumns="repeat(5, 1fr)" gap={18}>
            {forecast &&
              forecast.map((data: ForecastType) => {
                return <WeatherCard dataWeather={data} />;
              })}
          </Grid>
        </Center>
      </Box>
    </>
  );
};

export default ForecastCity;
