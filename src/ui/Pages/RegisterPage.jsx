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
            Register
          </Text>
          <Box
            onClick={handleClick}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize={20}
              textAlign="center"
              pt="10"
              color={"brand.1000"}
              fontFamily={"theme.fonts.body"}
              fontWeight="bold"
              mb="-1"
              visibility={clicked ? 'visible' : 'hidden'}
              opacity={clicked ? 1 : 0}
              transition="opacity 0.3s"
            >
              * Please fill all the fields
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={1}
          >
            <Flex justifyContent="space-between" maxW="500px" w="100%">
              <FormControl id="nombre" isRequired>
                <FormLabel color="white" fontSize="18">
                  Name
                </FormLabel>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Input
                    placeholder="10 or less characters"
                    size="lg"
                    maxW={"500px"}
                    colorScheme="whiteAlpha"
                    color={"brand.50"}
                    background={"white"}
                    h={"70px"}
                    isInvalid
                    onClick={() => setClicked(true)}
                    errorBorderColor={clicked ? "crimson" : undefined}
                  />
                </Box>
              </FormControl>
            </Flex>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={1}
          >
            <Flex justifyContent="space-between" maxW="500px" w="100%">
              <FormControl id="apellido" isRequired>
                <FormLabel color="white" fontSize="18">
                  Last name
                </FormLabel>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Input
                    placeholder="20 or less characters"
                    size="lg"
                    maxW={"500px"}
                    colorScheme="whiteAlpha"
                    color={"brand.50"}
                    background={"white"}
                    h={"70px"}
                    isInvalid
                    onClick={() => setClicked(true)}
                    errorBorderColor={clicked ? "crimson" : undefined}
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
                  Enrollment number
                </FormLabel>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Input
                    placeholder="Enrollment number (A0XXXXXXX)"
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
                  Create a password
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
                    placeholder="A combination between letters and numbers"
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
                  Date of birth
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
              <FormControl id="placas" isRequired ml={3}>
                <FormLabel color="white" fontSize="18">
                  Vehicle plate
                </FormLabel>
                <Input
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
              onClick={() => onRegister()} // Doy 10 varos a que hay una mejor manera de hacer esto pero el copilot lo autocompleto en el segundo en el que esceribi onClick
            >
              <Text fontSize={30} color={"brand.50"}>
                {" "}
                Register{" "}
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


const onRegister = () => {
  const nombre = document.getElementById("nombre").value
  const apellido = document.getElementById("apellido").value
  const matricula = document.getElementById("matricula").value
  const password = document.getElementById("password").value
  const placas = document.getElementById("placas").value

  if (nombre === "" || apellido === "" || matricula === "" || password === "" || placas === "") {
    console.log("Please fill all the fields")
  }
  else {
    fetch("http://localhost:3000/Usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({
        Nombre: nombre,
        Apellido: apellido,
        Matricula: matricula,
        Password: password,
        Placas: placas
      })
    }).then(result => result.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export default RegisterPage;