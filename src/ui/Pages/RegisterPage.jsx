// eslint-disable-next-line no-unused-vars
import React , { useState } from "react";
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure
} from "@chakra-ui/react";

import theme from "../../theme";


function RegisterPage() {
  const [show, setShow] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [errorMessage, setErrorMessage] = useState("");
  /* endPoint que no sirvió de nada pq al final lo hice en el front
  const validateUser = async (matricula) => {
    try {
      let response = await fetch('http://localhost:3000/Usuario/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Matricula: matricula })
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        // Handle non-200 responses
        throw new Error(data.error || 'Error occurred while validating user');
      }
  
      // Handle successful response
      // ...
  
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(error.message); // Set the error message
      onOpen(); // Open the alert
    }
  } */
  
  
  

    const onRegister = () => {
      const nombre = document.getElementById("nombre").value
      const apellido = document.getElementById("apellido").value
      const matricula = document.getElementById("matricula").value
      const password = document.getElementById("password").value
      const placas = document.getElementById("placas").value
    
      if (nombre === "" || apellido === ""  || matricula === "" || password === "" || placas === "") {
        setErrorMessage("Please fill all the fields");
        onOpen();
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
          console.log("Entramos al then")
          if (data.includes('Duplicate entry')) {
            console.log("Primer if")
            setErrorMessage("User already exists");
            onOpen();
          } 
            else if (data.error) {
              console.log("segundo if")
            setErrorMessage(data.error);
            onOpen();
          } else {
            console.log("tercer if")
            window.location.href = "/login";
          }
          console.log("Llegamos al final del then")
        })
        .catch(error => {
          console.log(error);
          setErrorMessage("Error while registering");
          onOpen();
        });
      }
    }
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
          </Box>
          <AlertDialog
            motionPreset='slideInBottom'
            onClose={onClose}
            isOpen={isOpen}
            isCentered
          >
            <AlertDialogOverlay />
            <AlertDialogContent>
              <AlertDialogHeader>Error</AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                {errorMessage}
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button onClick={onClose}>
                  Close
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
      </AlertDialog>
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



export default RegisterPage;