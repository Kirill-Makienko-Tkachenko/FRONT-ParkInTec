// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import { Text, Box, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

import "@fontsource/mitr/400.css";

function LoginPage() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

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
            <Input
              placeholder="Correo con matricula institucional 'A014XXXXX@tec.mx'"
              size="lg"
              maxW={"800px"}
              colorScheme="whiteAlpha"
              color={"brand.50"}
              background={"white"}
              h={"70px"}
            />
          </Box>
          <br />
          <Box display="flex" alignItems="center" justifyContent="center">
            <InputGroup size="md" maxW="800px">
              <Input
                pr="4.5rem"
                size="lg"
                colorScheme="whiteAlpha"
                color="brand.50"
                background="white"
                h="70px"
                type={show ? "text" : "password"}
                placeholder="Ingrese su contraseña (Puede no ser la misma que la institucional)"
              />
              <InputRightElement  width="4rem" height="70px" display="flex" alignItems="center" justifyContent="center" marginEnd={"3"}>
                <Button size="lg" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
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
              onClick={() => onLogin()} // Doy 10 varos a que hay una mejor manera de hacer esto pero el copilot lo autocompleto en el segundo en el que esceribi onClick
            >
              <Text fontSize={40} color={"brand.50"}>
                {" "}
                Entrar{" "}
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LoginPage;

const onLogin = () => {
  console.error("En algun momento aqui va a haber una verificacion de usuario");
  window.location.href = '/'
};
