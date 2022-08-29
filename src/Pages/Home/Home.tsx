import React, { useEffect, useState } from "react";
import { Box, Center, FormControl, Text } from "@chakra-ui/react";
import Header from "../../Components/Header/Header";
import Sunset from "../../Assets/Sunset.jpeg";
import ForecastCity from "../../Components/ForecastCity/ForecastCity";
import { Select } from "chakra-react-select";
import Swal from "sweetalert2";
import { CityNames } from "./CityNames";
import WeatherCard from "../../Components/WeatherCard/WeatherCard";

export const Home: React.FC = () => {
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");
  const [coordinates, setCoordinates] = useState({
    latitude: "",
    longitude: "",
  });

  const setNewCoordinates = (cityName: string) => {
    switch (cityName) {
      case "NY":
        setCoordinates((prevState) => ({
          ...prevState,
          latitude: "40.774042",
          longitude: "-73.974142",
        }));
        break;
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude.toString());
        setLongitude(position.coords.longitude.toString());
        console.log(position)
      });
      
    } else {
      Swal.fire({
        title: "Error!",
        text: "El navegador no soporta geolocalización",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  }, []);

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
              Consultá el clima en distintas localidades
            </Text>
            <Text fontSize="2xl" color="white">
              Seleccione otro lugar
            </Text>
            <Center>
              <Box w={"300px"} mt={5} backgroundColor={"lightgray"}>
                <FormControl>
                  <Select
                    size="sm"
                    placeholder="Ciudades"
                    selectedOptionColor="gray"
                    options={CityNames}
                    onChange={(value) => console.log(value)}
                  />
                </FormControl>
              </Box>
            </Center>
          </Box>
        </Center>
      </Box>
      <Box position="absolute" color={"black"} textAlign='center' w={'100%'}>
        <Center><ForecastCity latitude={latitude} longitude={longitude} /></Center>
      </Box>
    </>
  );
};

export default Home;
