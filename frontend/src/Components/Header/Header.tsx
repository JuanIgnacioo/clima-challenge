import { Box, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsCloud } from "react-icons/bs";

import React from "react";

export const Header: React.FC = () => {
  return (
    <>
      <Box bg="#E9E5E4" px={4}>
        <Flex h={20} alignItems={"center"}>
          <Icon as={BsCloud} mr={4} />
          <Text fontSize="xl" mt={1} color={"black"}>
            Weather App
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
