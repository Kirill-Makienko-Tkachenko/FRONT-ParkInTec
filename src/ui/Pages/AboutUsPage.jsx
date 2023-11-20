import React from "react";
import Header from "../components/Header";
import CharacteristicCard from "../components/CharacteristicCard";
import DeveloperProp from "../components/DeveloperProp";
import { Text, Box, Image, Select, Flex, Heading } from "@chakra-ui/react";
import realTimeIcon from "../../assets/real-time-icon.svg";
import Lock from   "../../assets/privacy-icon.svg";
import World from "../../assets/future-icon.svg";

import "@fontsource/mitr/400.css";

function AboutUsPage() {
  return (
    <>
      <Box>
        <Header />
        <Box bg="brand.50" width="100vw" height="50vh">
          <Flex
            justifyContent="center"
            width="100%"
            padding="1%"
          >
            <Text
              textAlign="center"
              fontFamily="Mitr"
              fontSize="4xl"
              p={0.5}
              color="white"
            >
              <Box as="span" color="signal.selected">
                Effortlessly
              </Box>{" "}
              Navigate and
              <br />
              Park with{" "}
              <Box as="span" color="signal.selected">
                Precision
              </Box>
            </Text>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            w="100%"
            padding="1%"
          >
            <Text
              color="#FFF"
              textAlign="center"
              fontFamily="Mitr"
              lineHeight="normal"
              width="60%"
            >
              At ParkInTec, we're revolutionizing the parking experience for the
              Tec Community with our cutting-edge, IoT-powered solutions. We're
              dedicated to leveraging the power of IoT to create a smarter, more
              connected campus experience. Join us in driving towards a more
              efficient, tech-enabled future.
            </Text>
          </Flex>
          <Flex h="100%">
            <CharacteristicCard
              imageUrl= {realTimeIcon}
              titleText="Real-Time Availability Tracking"
              descriptionText="Aquí va un choro"
            />
            <CharacteristicCard
              imageUrl= {Lock}
              titleText="Data privacy and security"
              descriptionText="Aquí va un choro x2"
            />
            <CharacteristicCard
              imageUrl={World}
              titleText="Vision for the future"
              descriptionText="Aquí va un choro"
            />
          </Flex>
        </Box>
        <Box bg="brand.brand.gray" width="100vw" height="55vh">
          <Flex
            justifyContent="center"
            width="100%"
            padding="1%"
          >
            <Heading
              color="brand.50"
              text-align="center"
              font-family="Mitr"
              font-size="48px"
              font-style="normal"
              font-weight="400"
              line-height="normal"
              padding=".5%"
            >
              Developers
            </Heading>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            h="100%"
          >
            <DeveloperProp
              imageUrl="src\assets\LogoWhite.png"
              headingText="Desirée Espinosa"
              bodyText="Project Manager / Front-End Developer / UX & UI"
            />
            <DeveloperProp
              imageUrl="src\assets\LogoWhite.png"
              headingText="Dulce Bucio"
              bodyText="Front-End and Back-End Developer / UX & UI / Electronics"
            />
            <DeveloperProp
              imageUrl="src\assets\LogoWhite.png"
              headingText="Kirill Makienko"
              bodyText="Front-End / Back-End Developer "
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default AboutUsPage;