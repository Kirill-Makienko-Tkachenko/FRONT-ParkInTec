// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import theme from "../../theme";
import PropTypes from "prop-types";
import { Box} from "@chakra-ui/react";


import '@fontsource/mitr/200.css'

function Park_Button({ height, width, text, onClick, ...props }) {

    return (
        
            <Box
                as="button"
                height="height"
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                border="1px"
                px="8px"
                borderRadius="2px"
                fontSize="14px"
                fontWeight="semibold"
                bg="##D9D9D9"
                borderColor="brand.50"
                color="brand.100"
                _hover={{ bg: "#ebedf0" }}
                _active={{
                    bg: "#dddfe2",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9",
                }}
                _focus={{
                    boxShadow:
                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                }}
            >
                Join Group
            </Box>
  );
}

export default Park_Button;

const goToAboutUs = () => {
                console.log('Hola xd')
            }
