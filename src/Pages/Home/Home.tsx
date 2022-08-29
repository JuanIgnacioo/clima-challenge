import React, { useEffect, useState } from "react";
import { Box, Center, Select, Text } from "@chakra-ui/react";
import Header from "../../Components/Header/Header";
import Sunset from "../../Assets/Sunset.jpeg";
import ForecastCity from "../../Components/ForecastCity/ForecastCity";
import Swal from 'sweetalert2';

export const Home: React.FC = () => {
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude.toString());
        setLongitude(position.coords.longitude.toString());
      });
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'El navegador no soporta geolocalización',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
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
        position="absolute"
      >
        <Box textAlign="center" fontSize="xl">
          <Text fontSize="3xl" mt={20} color="white">
            Consultá el clima en distintas localidades
          </Text>
          <Text fontSize="2xl" color="white">
            Seleccione otro lugar
          </Text>
          <Center>
            <Select
              placeholder="Select option"
              width={"xs"}
              mt={3}
              color="gray"
            >
              <option value="option1">New York</option>
              <option value="option2">Bankgkok</option>
              <option value="option3">Roma</option>
              <option value="option3">Munich</option>
              <option value="option3">Moscú</option>
            </Select>
          </Center>
        </Box>
      </Box>
      <Box>
        <ForecastCity latitude={latitude} longitude={longitude} />
      </Box>
    </>
  );
};

export default Home;
