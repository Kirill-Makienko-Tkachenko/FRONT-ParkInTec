// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import {
  Text,
  Box,
  Button,
} from "@chakra-ui/react";

import "@fontsource/mitr/400.css";

function Splash() {

  return (
    <>
      <Box>
        <Header />
        <Box bg="brand.50" width="100vw" height="90vh">
          <br />

          <Text
            fontSize={120}
            textAlign="center"
            pt="10"
            color={"white"}
            fontFamily={"theme.fonts.body"}
            fontWeight="bold"
          >
            {" "}
            ParkInTec{" "}
          </Text>
          <br />
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              color={"brand.50"}
              h={"100px"}
              w={"250px"}
              variant="outline"
              background={"white"}
              _hover={{
                bg: "gray.300",
              }}
              onClick={() => window.location.href = '/register'}
            >
              <Text fontSize={40} color={"brand.50"}>
                {" "}
                Register{" "}
              </Text>
            </Button>
          </Box>
          <br />
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              color={"#D9D9D9"}
              h={"100px"}
              w={"250px"}
              variant="outline"
              background={"white"}
              _hover={{
                bg: "gray.300",
              }}
              onClick={() => window.location.href = '/login'} // Doy 10 varos a que hay una mejor manera de hacer esto pero el copilot lo autocompleto en el segundo en el que esceribi onClick
            >
              <Text fontSize={40} color={"brand.50"}>
                {" "}
                Login{" "}
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Splash;
