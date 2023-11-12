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
          <Text
            fontSize={20}
            textAlign="center"
            pt="10"
            color={"brand.1000"}
            fontFamily={"theme.fonts.body"}
            fontWeight="bold"
          >
            Los campos que contengan * son obligatorios
          </Text>
          <br />

          <FormLabel color="white">Nombre*</FormLabel>
          <FormLabel color="white">
            Habria que poner esto arriba del input de el nombre, y lo mismo con
            el de contraseña, pero ya me da hueva
          </FormLabel>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Input
              placeholder="Nombre*"
              size="lg"
              maxW={"800px"}
              colorScheme="whiteAlpha"
              color={"brand.50"}
              background={"white"}
              h={"70px"}
              isInvalid
              errorBorderColor="crimson"
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
                <Button size="lg" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <br />
          <Box display="flex" alignItems="center" justifyContent="center">
            <Flex justifyContent="space-between" maxW="800px" w="100%">
              <FormControl id="dob" isRequired>
                <FormLabel color="white">Fecha de nacimiento</FormLabel>
                <Input
                  placeholder="Fecha de nacimiento"
                  size="lg"
                  type="date"
                  maxW={"390px"} // half of 800px considering some space for margin
                  colorScheme="whiteAlpha"
                  color={"brand.50"}
                  background={"white"}
                  h={"70px"}
                  isInvalid
                  errorBorderColor="crimson"
                />
              </FormControl>
              <Spacer />
              <FormControl id="car-number" isRequired>
                <FormLabel color="white">Placa del coche</FormLabel>
                <Input
                  placeholder="Placa del coche*"
                  size="lg"
                  maxW={"390px"} // half of 800px considering some space for margin
                  colorScheme="whiteAlpha"
                  color={"brand.50"}
                  background={"white"}
                  h={"70px"}
                  isInvalid
                  errorBorderColor="crimson"
                />
              </FormControl>
            </Flex>
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

export default RegisterPage;

const onLogin = () => {
  console.error("En algun momento aqui va a haber una verificacion de usuario");
  window.location.href = '/'
};
