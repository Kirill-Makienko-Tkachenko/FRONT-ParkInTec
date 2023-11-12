// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import {
  Text,
  Box,
  Button,
} from "@chakra-ui/react";

import "@fontsource/mitr/400.css";

function Login() {

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
          <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
            <Button
              bg={"#D9D9D9"}
              h={"80px"}
              w={"260px"}
              variant="outline"
              borderColor={"brand.100"}
              borderWidth={"2px"}
              boxShadow={"0 0 8px rgba(255, 255, 255, 0.6)"}
              _hover={{
                bg: "#EAEAEA",
              }}
            >
              <Text fontSize={38} color={"#001F61"}>
                {" "}
                Register{" "}
              </Text>
            </Button>
          </Box>
          <br />
          <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
            <Button
              bg={"#D9D9D9"}
              h={"80px"}
              w={"260px"}
              variant="outline"
              borderColor={"brand.100"}
              borderWidth={"2px"}
              boxShadow={"0 0 8px rgba(255, 255, 255, 0.6)"}
              _hover={{
                bg: "#EAEAEA",
              }}
            >
              <Text fontSize={38} color={"#001F61"}>
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

export default Login;
