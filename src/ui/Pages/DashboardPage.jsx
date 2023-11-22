// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
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
  Flex,
} from "@chakra-ui/react";
import ParkingSpace from "../components/ParkingSpace";

function Dashboard() {
  

  return (
    <>
      <Header />
      <Box bg="brand.50" width="100vw" height="90vh">
        

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

        
      </Box>
    </>
  );
}

export default Dashboard;
