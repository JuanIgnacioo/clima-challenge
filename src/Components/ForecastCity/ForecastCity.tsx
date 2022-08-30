import React, { useCallback, useEffect } from "react";
import { Box, Center, Grid, Text } from "@chakra-ui/react";
import { ForectasCityProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { actions as ForecastActions } from "../../Redux/forecast/actions";
import { getForecastData } from "../../Redux/forecast/selectors";
import WeatherCard from "../WeatherCard/WeatherCard";
import { ForecastType } from "../../Redux/forecast/types";

export const ForecastCity: React.FC<ForectasCityProps> = ({ coordinates }) => {
  const dispatch = useDispatch();

  const forecast = useSelector(getForecastData);

  const callForecastRequest = useCallback(
    (la: string, lo: string) => {
      if(la === "" || lo === "") return null;
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
          <Grid templateColumns="repeat(6, 1fr)" gap={15}>
            {forecast &&
              forecast.map((data: ForecastType, index: number) => {
                return <WeatherCard dataWeather={data} key={index} />;
              })}
          </Grid>
        </Center>
      </Box>
    </>
  );
};

export default ForecastCity;
