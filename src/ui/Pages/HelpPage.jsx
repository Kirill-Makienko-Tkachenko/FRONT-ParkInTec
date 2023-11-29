import React from "react";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import { Text, Box, Select, Flex, Heading, Accordion} from "@chakra-ui/react";

import "../components/styles.css";
import "@fontsource/mitr/400.css";

function HelpPage() {
  return (
    <>
      <Box>
        <Header />
        <Box bg="brand.50" width="100vw" height="50vh">
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
          
          <Flex className="questions-container" question-accordion h="100%">
            <Box>
                <Accordion className="question-accordion" allowToggle>
                <QuestionCard
                 titleText="How to Use the Parking Tool"
                    descriptionText="..."
                />
                <QuestionCard
                 titleText="Visualization of Available Spaces"
                 descriptionText="..."
                />
                <QuestionCard
                 titleText=".."
                 descriptionText="..."
                />
                </Accordion>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default HelpPage;
