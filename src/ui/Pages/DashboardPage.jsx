// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import {
  Text,
  Box,
  Image,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import ParkingSpace from "../components/ParkingSpace";

function Dashboard() {
  return (
    <>
      <Header />
      <Box bg="brand.50" width="100vw" height="90vh">
        <ParkingSpace />

        <Box width="30vw" marginStart={20}>
          <Text
            fontSize={50}
            textAlign="center"
            pt="5"
            color={"white"}
            fontFamily={"theme.fonts.body"}
            fontWeight="bold"
          >
            Avaliability
          </Text>

          <br />

          <TableContainer>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td>E1</Td>
                  <Td background={"brand.1000"}></Td>
                </Tr>
                <Tr>
                  <Td>E2</Td>
                  <Td background={"brand.500"}></Td>
                </Tr>
                <Tr>
                  <Td>E3</Td>
                  <Td background={"brand.2000"}></Td>  
                </Tr>
                <Tr>
                  <Td>E4</Td>
                  <Td background={"brand.2000"}></Td>  
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
