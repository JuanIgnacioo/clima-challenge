import { Box, Flex, Heading, Image, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import cardBackground from "../../Assets/mountain.jpeg";
import { getForecastFetching } from "../../Redux/forecast/selectors";
import { ForecastType } from "../../Redux/forecast/types";
import {
  getCityName,
  getGeolocationFetching,
} from "../../Redux/geolocation/selectors";

import { getTimestampWeekDay, getWeatherIcon } from "./utils";

type WeatherCardProps = {
  dataWeather: ForecastType;
};

const WeatherCard: React.FC<WeatherCardProps> = ({ dataWeather }) => {
  const cityname = useSelector(getCityName);
  const fetchingCity = useSelector(getGeolocationFetching);
  const fetchingWeather = useSelector(getForecastFetching)
  console.log(dataWeather);
  return (
    <>
      <Box
        backgroundImage={`${cardBackground}`}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundColor={"blackAlpha.600"}
        backgroundBlendMode={"overlay"}
        transition={"all 0.3s ease-in-out"}
        _hover={{
          backgroundColor: "blackAlpha.700",
        }}
        borderRadius={"10px"}
        color={"white"}
        boxShadow={"lg"}
      >
        <Box
          position={"relative"}
          as={Flex}
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          paddingX={4}
          paddingY={6}
          color={"white"}
          textAlign={"center"}
        >
          {
            <Tooltip hasArrow placement={"top"}>
              <Image
                width={"80px"}
                filter={"drop-shadow(0 0 4px white)"}
                src={getWeatherIcon(dataWeather?.weather[0].icon)}
                alt={dataWeather?.weather[0].description}
              />
            </Tooltip>
          }

          <Heading as={"h4"} fontSize={"xs"} fontWeight={"bold"}>
            {getTimestampWeekDay(dataWeather.dt)}
          </Heading>

          <Heading fontSize={"lg"}>
            {fetchingCity ? "Cargando.." : cityname}
          </Heading>

          {
            <Text fontSize={"md"}>
              {dataWeather &&
                dataWeather.weather &&
                dataWeather.weather[0].description}
            </Text>
          }

          <Flex
            justifyContent={"center"}
            flexWrap={"wrap"}
            gap={[0, 0, 2]}
            padding={2}
            w={"100%"}
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
              <Text fontWeight={"bold"}>{fetchingWeather? '...' :`Max temp ${Math.round(
                dataWeather.temp.max
              )}ºC`}</Text>
            </Box>
            <Box>
              <Text fontSize={"sm"}>{fetchingWeather? '...' : `Min temp ${Math.round(dataWeather.temp.min)} ºC`}</Text>
              
            </Box>
            <Box>
              <Text fontSize={"sm"}>Humedad</Text>
              <Text fontWeight={"bold"}>{dataWeather.humidity}%</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default WeatherCard;
