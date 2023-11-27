import React from "react";
import { Box, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import "@fontsource/mitr/400.css";

const QuestionCard = ({ titleText, descriptionText }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton onClick={handleToggle}>
          <Box as="span" flex="1" textAlign="left">
            {titleText}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} display={isOpen ? "block" : "none"}>
        {descriptionText}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default QuestionCard;
