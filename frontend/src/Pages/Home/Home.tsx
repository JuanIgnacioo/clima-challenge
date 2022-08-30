import React, { useEffect, useState, useCallback } from "react";
import { Box, Center, Flex, FormControl, Text } from "@chakra-ui/react";
import Header from "../../Components/Header/Header";
import Sunset from "../../Assets/Sunset.jpeg";
import ForecastCity from "../../Components/ForecastCity/ForecastCity";
import { Select } from "chakra-react-select";
import Swal from "sweetalert2";
import { CityNames, SelectOptionType } from "./CityNames";

import { actions as GeolocationActions } from "../../Redux/geolocation/actions";
import {
  getCurrentForecast,
  getForecastFetching,
} from "../../Redux/forecast/selectors";
import {
  getCityName,
  getGeolocationFetching,
} from "../../Redux/geolocation/selectors";
import { useDispatch, useSelector } from "react-redux";

export const Home: React.FC = () => {
  const cityname = useSelector(getCityName);
  const fetchingCityName = useSelector(getGeolocationFetching);
  const fetchingForecast = useSelector(getForecastFetching);
  const currentForecast = useSelector(getCurrentForecast);
  const dispatch = useDispatch();

  const [coordinates, setCoordinates] = useState({
    latitude: "",
    longitude: "",
  });

  const setNewCoordinates = (selectValues: SelectOptionType) => {
    setCoordinates((prevState) => ({
      ...prevState,
      latitude: selectValues.value.latitude,
      longitude: selectValues.value.longitude,
    }));
    callGeolocationRequest(
      selectValues.value.latitude,
      selectValues.value.longitude
    );
  };

  const callGeolocationRequest = useCallback(
    (la: string, lo: string) => {
      if (la === undefined || lo === undefined) return null;
      dispatch(
        GeolocationActions.getGeolocationRequest({
          latitude: la,
          longitude: lo,
        })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates((prevState) => ({
          ...prevState,
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        }));

        callGeolocationRequest(
          position.coords.latitude.toString(),
          position.coords.longitude.toString()
        );
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "El navegador no soporta geolocalización",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  }, [callGeolocationRequest]);

  return (
    <>
      <Header />
      <Box
        height={350}
        w="100%"
        backgroundImage={Sunset}
        backgroundSize={"100%"}
      >
        <Center>
          <Box textAlign="center" fontSize="xl" mt={300} position="absolute">
            <Text fontSize="3xl" color="white">
              Consultá el pronostico extendido en distintas localidades
            </Text>
            <Text fontSize="2xl" color="white">
              Seleccione otro lugar
            </Text>
            <Center>
              <Box w={"300px"} mt={5} backgroundColor={"lightgray"}>
                <FormControl>
                  <Select
                    size="sm"
                    isDisabled={fetchingCityName || fetchingForecast}
                    placeholder="Ciudades"
                    selectedOptionColor="gray"
                    options={CityNames}
                    onChange={(value: any) => setNewCoordinates(value)}
                  />
                </FormControl>
              </Box>
            </Center>
            <Box
              justifyContent={"center"}
              padding={2}
              marginTop={4}
              borderRadius={"10px"}
              backgroundColor={"whiteAlpha.500"}
              sx={{
                "& *": {
                  textAlign: "center",
                  flex: ["0 1 50%", "0 1 50%", "auto"],
                },
              }}
            >
              <Box>
                <Text as="b" fontSize="35px" color="white">
                  {fetchingCityName
                    ? "Cargando ciudad ..."
                    : `Pronóstico extendido para ${cityname}`}
                </Text>
              </Box>
              <Box>
                <Text as="cite" fontSize="15px" color={"white"}>
                  Temp actual:
                  {fetchingForecast
                    ? "Cargando ..."
                    : ` ${Math.round(currentForecast.temp)} °C`}
                </Text>
              </Box>
              <Box>
                <Text as="cite" fontSize="15px" color={"white"}>
                  Sensacion Termica:{" "}
                  {fetchingForecast || fetchingCityName
                    ? "Cargando ..."
                    : `${Math.round(currentForecast.feels_like)}°C`}
                </Text>
              </Box>
              <Box>
                <Text as="cite" fontSize="15px" color={"white"}>
                  Cielo:{" "}
                  {fetchingForecast || fetchingCityName
                    ? "Cargando ..."
                    : `${currentForecast?.weather?.description}`}
                </Text>
              </Box>
            </Box>
          </Box>
        </Center>
      </Box>
      <Box position="absolute" color={"black"} textAlign="center" w={"100%"}>
        <Center>
          <ForecastCity coordinates={coordinates} />
        </Center>
      </Box>
    </>
  );
};

export default Home;
