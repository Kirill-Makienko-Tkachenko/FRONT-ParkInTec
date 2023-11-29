// eslint-disable-next-line no-unused-vars
import React, {  } from "react";
import Header from "../components/Header";
import {
  Text,
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Image, 
  Flex
} from "@chakra-ui/react";
import ParkingSpace from "../components/ParkingSpace";
import weather from "../../assets/weather-icon.png";
import theme from "../../theme";

const getTemperature = () => {
  return (
    <Text
    fontSize={30}
    textAlign="center"
    pt="5"
    color={"brand.100"}
    fontFamily={"theme.fonts.body"}
    fontWeight="bold"
  >
    Temperature
  </Text>
  );
};

function Dashboard() {
  

  return (
    <>
      <Header />
      <Box bg="brand.50" width="100vw" height="90vh">
        

        <Box width="30vw" marginStart={20} bg="">
          <Text
            fontSize={50}
            textAlign="center"
            pt="5"
            color={"white"}
            fontFamily={"theme.fonts.body"}
            fontWeight="bold"
          >
            Availability
          </Text>

          <br />

          <TableContainer marginStart={40}>
            <Table variant="simple" w={"70%"} size="lg">
              <Tbody>
                <Tr>
                  <Td background={"brand.100"} color={"white"}>
                    E1
                  </Td>
                  <Td background={"brand.1000"}></Td>
                </Tr>
                <Tr>
                  <Td background={"brand.101"} color={"white"}>
                    E2
                  </Td>
                  <Td background={"brand.500"}></Td>
                </Tr>
                <Tr>
                  <Td background={"brand.102"} color={"white"}>
                    E3
                  </Td>
                  <Td background={"brand.2000"}></Td>
                </Tr>
                <Tr>
                  <Td background={"brand.103"} color={"white"}>
                    E4
                  </Td>
                  <Td background={"brand.2000"}></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <br />
        <ParkingSpace/>
        <Box width="50%">
          <Text
              fontSize={50}
              textAlign="center"
              pt="5"
              color={"white"}
              fontFamily={"theme.fonts.body"}
              fontWeight="bold"
              marginLeft="-20vh"
            >
              Have a nice day!
            </Text>
            <Flex flexDirection="row" justifyContent="center">
            <Box width="20%" marginStart="40">
              <Image src={weather} boxSize={"90px"}></Image>
            </Box>
            <Box width="100%">
              <Box border="1px solid #001F61" bg="brand.brand.gray" boxShadow={"0px 0px 6px 0px #001F61 inset"} width="50%" padding="1%" borderRadius="10px">
            </Box>
            <Box>
              <getTemperature/>
            </Box>
            </Box>
            </Flex>
        </Box>

        
      </Box>
    </>
  );
}

export default Dashboard;
