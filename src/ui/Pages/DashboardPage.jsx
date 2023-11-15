// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import { Text, Box, Image, Select } from "@chakra-ui/react";
import ParkingSpace from "../components/ParkingSpace";



function Dashboard() {
  return (
    <>
      <Header />
      <Box bg="brand.50" width="100vw" height="90vh">
          <ParkingSpace />

        <Box width="30vw" marginStart={20}>
          
          <Text

            fontSize={50}
            textAlign="center"
            pt="5"
            color={"white"}
            fontFamily={"theme.fonts.body"}
            fontWeight="bold"
          >
            Avaliability
          </Text>

          <br />

          

        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
