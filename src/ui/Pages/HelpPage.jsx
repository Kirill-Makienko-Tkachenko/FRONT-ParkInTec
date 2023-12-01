import React from "react";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import { Text, Box, Select, Flex, Heading, Accordion} from "@chakra-ui/react";
import GoBackArrow from "../components/goBackArrow";


import "../components/styles.css";
import "@fontsource/mitr/400.css";

function HelpPage() {
  return (
    <>
      <Box>
        
        <Header />
        
        <Box bg="brand.50" width="100vw" height="100vh" overflow="hidden">
          <GoBackArrow />
          <Flex className="textContainer-1" justifyContent="center" width="100%" padding="1%">
            <Heading color="#FFFFFF" text-align="center" fontFamily="Mitr" fontSize="2.3rem" font-style="normal" font-weight="400" line-height="normal" padding=".5%" marginTop=".4rem">
              You've Got
            </Heading>
            <Heading color="signal.selected" text-align="center" fontFamily="Mitr" fontSize="2.3rem" font-style="normal" font-weight="400" line-height="normal" padding=".5%" marginTop=".4rem">
              Questions.
            </Heading>
            <Heading color="#FFFFFF" text-align="center" fontFamily="Mitr" fontSize="2.3rem" font-style="normal" font-weight="400" line-height="normal" padding=".5%" marginTop=".4rem">
              We've Got
            </Heading>
            <Heading color="signal.selected" text-align="center" fontFamily="Mitr" fontSize="2.3rem" font-style="normal" font-weight="400" line-height="normal" padding=".5%" marginTop=".4rem">
              Answers.
            </Heading>
          </Flex>

          <Flex className="questions-container" question-accordion direction="column" align="center" justify="center" h="100%" w="100%" >
            <Box width={{ base: "100%", md: "70%", lg: "40%"}} >
                <Accordion className="question-accordion" allowToggle marginTop="-15%">
                <QuestionCard titleText="How to Use the Parking Tool">
                  <Text fontSize={40}>Follow these steps to find and select your parking spot:</Text>
                  <ul>
                    <Text fontSize={30}>1. Register with Your Details:</Text>
                    <Text fontSize={20}>Register with your first name, last name, enrollment ID, date of birth, and your car's license plate.</Text>
                    <Text fontSize={30}>2. Reservation Section:</Text>
                    <Text fontSize={20}>Navigate to the parking reservation section where you can choose from available parking spaces.
                    Once you select a parking space, you'll have a time limit of 3 minutes to complete the reservation. If the time elapses, you'll need to choose another available space.</Text>
                    <Text fontSize={30}>3. Park Your Vehicle:</Text>
                    <Text fontSize={20}>After successfully reserving a parking space, proceed to park your vehicle in the designated spot.</Text>
                  </ul>
                </QuestionCard>
                <QuestionCard titleText="Visualization of Available Spaces" imageUrl="src\assets\map.png">
                 <Text fontSize={20}>The parking spaces are distributed as follows, with reference to the cafeteria located on the left side.</Text>
                </QuestionCard>
                </Accordion>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default HelpPage;
