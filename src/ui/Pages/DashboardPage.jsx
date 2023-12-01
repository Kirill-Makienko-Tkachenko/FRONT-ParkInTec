// eslint-disable-next-line no-unused-vars
import React from "react";
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
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import ParkingSpace from "../components/ParkingSpace";
import weather from "../../assets/weather-icon.png";
import theme from "../../theme";
import TemperatureController from "../components/TemperatureController";
import GoBackArrow from "../components/goBackArrow";
import { InfoIcon } from "@chakra-ui/icons";

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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Header />
      <Box bg="brand.50" width="100vw" height="100vh">
        
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
          marginEnd="5"
          marginBottom="5"
        >
          
          <GoBackArrow />
          {/* Updated onClick event to call onOpen */}
          <InfoIcon boxSize={10} color={"white"} onClick={onOpen} />
        </Flex>

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
        <ParkingSpace />
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
              <TemperatureController />
            </Box>
          </Flex>
        </Box>

        
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Quick Help</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize={30}>
              There is just <span style={{ color: "orange" }}>1</span> simple step
            </Text>
            <Text fontSize={20}>
              1. Select the parking space you want to reserve, either by clicking on the map or on the `Selected Parking Space` option.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={goToHelp}>More Help</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const goToHelp = () => {
  window.location.href = '/help'
}

export default Dashboard;
