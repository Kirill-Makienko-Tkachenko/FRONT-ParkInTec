// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import { Text, Box, Button, Input, InputGroup, InputRightElement, Flex, FormControl, FormLabel} from "@chakra-ui/react";

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
          <Flex justifyContent="center" alignItems="center" w="100%">
            <Flex justifyContent="center" alignItems="center" maxW="500px" w="100%">
                <FormControl id="identifier">
                    <FormLabel color="white" fontSize="18">
                        Identifier 
                    </FormLabel>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Input
                            placeholder="Identifier (Enrollment)"
                            size="lg"
                            maxW={"800px"}
                            colorScheme="whiteAlpha"
                            color={"brand.50"}
                            background={"white"}
                            h={"70px"}
                        />
                    </Box>
                </FormControl>
            </Flex>
          <br />
          </Flex>
          <Flex justifyContent="center" alignItems="center" w="100%">
          <Flex justifyContent="center" alignItems="center" maxW="500px" w="100%">
                <FormControl id="password">
                    <FormLabel color="white" fontSize="18">
                        Password
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
                    placeholder="ParkInTec Password"
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
          </Flex>
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
              onClick={() => onLogin()}
            >
              <Text fontSize={30} color={"brand.50"}>
                {" "}
                Log In{" "}
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

export default LoginPage;

const onLogin = async () => {
  const usuario = document.getElementById("identifier").value
  const password = document.getElementById("password").value

  const result = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Matricula: usuario,
      Password: password
    })
  })
  const data = await result.json()
  if (data[0] && data[0].conteo && data[0].conteo > 0) {
    alert("Logged in");
    console.log("Logged in");
  }
  
}
