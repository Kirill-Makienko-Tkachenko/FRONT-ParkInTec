// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import theme from "../../theme";
import PropTypes from "prop-types";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";


function Header({ height }) {
  return (
    <Box
      bg="brand.50"
      boxShadow="md"
      height={height}
      width={"100vw"}
    >
      <Flex
        align="center"
        justify="space-between" // Pushes items to opposite corners
        
        mx="auto"
      >
        <Heading as="h1" size="lg" color="white">
          Your Logo or App Name
        </Heading>
        <Button colorScheme="white" variant="outline">
          Login
        </Button>
      </Flex>
    </Box>
  );
}

// Add PropTypes validation
Header.propTypes = {
  height: PropTypes.string.isRequired,
};

export default Header;



