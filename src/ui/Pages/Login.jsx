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
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              color={"#D9D9D9"}
              h={"100px"}
              w={"200px"}
              variant="outline"
              _hover={{
                bg: "#001F61",
              }}
            >
              <Text fontSize={40} color={"#D9D9D9"}>
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
              w={"200px"}
              variant="outline"
              _hover={{
                bg: "#001F61",
              }}
            >
              <Text fontSize={40} color={"#D9D9D9"}>
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
