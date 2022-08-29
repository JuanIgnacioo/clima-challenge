import { Box, Flex, Heading, Image, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import cardBackground from "../../Assets/mountain.jpeg";
import { ForecastType } from "../../Redux/forecast/types";

import { getTimestampWeekDay, getWeatherIcon } from "./utils";

type WeatherCardProps = {
  dataWeather: ForecastType;
};

const WeatherCard: React.FC<WeatherCardProps> = ({ dataWeather }) => {
  
  
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
          {/* <Heading as={"h4"} fontSize={"xs"} fontWeight={"bold"}>
            {getTimestampWeekDay(weather.dt)}
          </Heading>
          <Text>{getByTimestamp(weather.dt)}</Text> */}

          {
            // <Tooltip hasArrow label={weather.weather[0].main} placement={"top"}></Tooltip>
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
   

          <Heading fontSize={"lg"}>nombre ciudad</Heading>

          {<Text fontSize={"md"}>description</Text>}

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
              <Text fontSize={"sm"}>Current Temp.</Text>
              <Text fontWeight={"bold"}>temperatura ºC</Text>
            </Box>
            <Box>
              <Text fontSize={"sm"}>Feels Like</Text>
              <Text fontWeight={"bold"}>Algunos grados ºC</Text>
            </Box>
            <Box>
              <Text fontSize={"sm"}>Humedad</Text>
              <Text fontWeight={"bold"}>porcentaje%</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default WeatherCard;
