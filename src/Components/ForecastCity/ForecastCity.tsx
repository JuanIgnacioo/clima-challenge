import React, { useCallback, useEffect } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { ForectasCityProps } from "./types";
import { useDispatch } from "react-redux";
import { actions as ForecastActions } from "../../Redux/forecast/actions";

export const ForecastCity: React.FC<ForectasCityProps> = ({
  latitude,
  longitude,
}) => {
  const dispatch = useDispatch();

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
      <Box textAlign="center" fontSize="xl">
        <Text fontSize="3xl" mt={20} color="white">
          Ciudad :
        </Text>
        <Center></Center>
      </Box>
      {latitude && longitude && console.log(latitude, longitude)}
    </>
  );
};

export default ForecastCity;
