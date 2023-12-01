// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Text,
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Image, 
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowBackIcon } from "@chakra-ui/icons";



const GoBackArrow = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      marginStart={10}
      paddingTop={5}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      backgroundColor={"transparent"}
      maxW={50}
    >
      <ArrowBackIcon
        color={isHovered ? "blue.500" : "white"} // Change color on hover
        boxSize={6}
        onClick={goBack}
      />
    </Box>
  );
};

function goBack() {
  window.history.back();
}

export default GoBackArrow;