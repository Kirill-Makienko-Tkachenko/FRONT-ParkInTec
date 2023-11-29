import React from "react";
import { Box, Text, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import "@fontsource/mitr/400.css";

const QuestionCard = ({ titleText, children, imageUrl }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: "brand.102", color: 'white' }}>
          <Box flex="1" textAlign="left">
            <Text fontSize="xl">{titleText}</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {children}
        {imageUrl && <Image src={imageUrl} alt="Reference map"/>}
      </AccordionPanel>
    </AccordionItem>
  );
};


export default QuestionCard;
