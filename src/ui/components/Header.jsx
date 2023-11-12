// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import theme from "../../theme";
import PropTypes from "prop-types";
import { Box, Flex, Button, Image, Stack, Text } from "@chakra-ui/react";
import LogoLight from "../../assets/LogoLight.png";

import '@fontsource/mitr/200.css'

function Header({ height }) {

  return (
    <Box
      bg="brand.100"
      boxShadow="md"
      height={height !== 0 ? height : ""}
      width={"100vw"}
    >
      <Flex
        align="center"
        justify="space-between" // Pushes items to opposite corners
        mx="auto"
      >
        <Box p={3} onClick={() => window.location.href = '/'}>
          <Image src={LogoLight} boxSize={"90px"} />
        </Box>

        <Stack spacing={20} direction="row" align="center" paddingRight={10}>
          
          <Button colorScheme="white" size="lg" variant='ghost' onClick={() => goToAboutUs()}>
            <Text color={"white"} fontFamily={"theme.fonts.body"}>About Us</Text>
          </Button>
          <Button colorScheme="white" size="lg" variant='ghost'>
          <Text color={"white"} fontFamily={"theme.fonts.body"}>Help</Text>
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

// Add PropTypes validation
Header.propTypes = {
  height: PropTypes.string.isRequired,
};

export default Header;

const goToAboutUs = () => {
  console.log('Hola xd')
  window.location.href = '/aboutus'
}
