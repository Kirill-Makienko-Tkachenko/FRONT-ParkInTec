// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import {
  Text,
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  Spacer,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import "@fontsource/mitr/400.css";

function RegisterPage() {
  const [show, setShow] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  const handleClick = (event) => {
    if (event.currentTarget.id === "show-hide-button") {
      setShow(!show);
    }
    setClicked(true);
  };

  return (
    <>
      <Box>
        <Header />
        <Box bg="brand.50" width="100vw" height="120vhs">
          <Text
            fontSize={120}
            textAlign="center"
            pt="10"
            color={"white"}
            fontFamily={"theme.fonts.body"}
            fontWeight="bold"
            mb="-16"
          >
            {" "}
            ParkInTec{" "}
          </Text>
          <Text
            fontSize={42}
            textAlign="center"
            pt="10"
            color={"white"}
            fontFamily={"theme.fonts.body"}
            fontWeight="bold"
            mb="1"
          >
            Registrarte
          </Text>
          {clicked && (
            <Text
              fontSize={20}
              textAlign="center"
              pt="10"
              color={"brand.1000"}
              fontFamily={"theme.fonts.body"}
              fontWeight="bold"
              mb="-1"
            >
              Los campos que tienen * son obligatorios
            </Text>
          )}

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={1}
          >
            <Flex justifyContent="space-between" maxW="500px" w="100%">
              <FormControl id="name" isRequired>
                <FormLabel color="white" fontSize="18">
                  Nombre
                </FormLabel>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Input
                    placeholder="Nombre"
                    size="lg"
                    maxW={"500px"}
                    colorScheme="whiteAlpha"
                    color={"brand.50"}
                    background={"white"}
                    h={"70px"}
                    isInvalid
                    errorBorderColor="crimson"
                    onClick={handleClick}
                  />
                </Box>
              </FormControl>
            </Flex>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={3}
          >
            <Flex justifyContent="space-between" maxW="500px" w="100%">
              <FormControl id="matricula" isRequired>
                <FormLabel color="white" fontSize="18">
                  Matrícula
                </FormLabel>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Input
                    placeholder="Matrícula"
                    size="lg"
                    maxW={"500px"}
                    colorScheme="whiteAlpha"
                    color={"brand.50"}
                    background={"white"}
                    h={"70px"}
                    isInvalid
                    errorBorderColor="crimson"
                    onClick={handleClick}
                  />
                </Box>
              </FormControl>
            </Flex>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={3}
          >
            <Flex justifyContent="space-between" maxW="500px" w="100%">
              <FormControl id="password" isRequired>
                <FormLabel color="white" fontSize="18">
                  Contraseña
                </FormLabel>
                <InputGroup size="md" maxW="500px">
                  <Input
                    pr="4.5rem"
                    size="lg"
                    colorScheme="whiteAlpha"
                    color="brand.50"
                    background="white"
                    h="70px"
                    type={show ? "text" : "password"}
                    placeholder="Contraseña nueva"
                    isInvalid
                    errorBorderColor="crimson"
                  />
                  <InputRightElement
                    width="4rem"
                    height="70px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    marginEnd={"3"}
                  >
                    <Button
                      size="lg"
                      onClick={handleClick}
                      id="show-hide-button"
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Flex>
          </Box>
          <br />

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={-2}
          >
            <Flex justifyContent="space-between" maxW="500px" w="100%">
              <FormControl id="dob" isRequired>
                <FormLabel color="white" fontSize="18">
                  Fecha de nacimiento
                </FormLabel>
                <Input
                  placeholder="Fecha de nacimiento"
                  size="lg"
                  type="date"
                  maxW={"250px"} // half of 500px considering some space for margin
                  colorScheme="whiteAlpha"
                  color={"brand.50"}
                  background={"white"}
                  h={"70px"}
                  isInvalid
                  errorBorderColor="crimson"
                  onClick={handleClick}
                />
              </FormControl>
              <Spacer />
              <FormControl id="car-number" isRequired ml={3}>
                <FormLabel color="white" fontSize="18">
                  Placa del vehículo
                </FormLabel>
                <Input
                  placeholder="Placa del vehículo"
                  size="lg"
                  maxW={"250px"} // half of 500px considering some space for margin
                  colorScheme="whiteAlpha"
                  color={"brand.50"}
                  background={"white"}
                  h={"70px"}
                  isInvalid
                  errorBorderColor="crimson"
                  onClick={handleClick}
                />
              </FormControl>
            </Flex>
          </Box>

          <br />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={3}
          >
            <Button
              bg={"#D9D9D9"}
              h={"52px"}
              w={"210px"}
              variant="outline"
              borderColor={"brand.100"}
              borderWidth={"2px"}
              boxShadow={"0 0 8px rgba(255, 255, 255, 0.6)"}
              _hover={{
                bg: "#EAEAEA",
              }}
              onClick={() => onLogin()} // Doy 10 varos a que hay una mejor manera de hacer esto pero el copilot lo autocompleto en el segundo en el que esceribi onClick
            >
              <Text fontSize={30} color={"brand.50"}>
                {" "}
                Continuar{" "}
              </Text>
            </Button>
          </Box>
          <br />
          <br />
          <br />
        </Box>
      </Box>
    </>
  );
}

export default RegisterPage;

const onLogin = () => {
  console.error("En algun momento aqui va a haber una verificacion de usuario");
  window.location.href = "/";
};
