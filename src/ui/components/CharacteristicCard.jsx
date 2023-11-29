import React from "react";
import { Text, Box, Image, Select, Flex, Heading} from "@chakra-ui/react";
import "@fontsource/mitr/400.css";

const CharacteristicCard = ({ imageUrl, titleText, descriptionText }) => {
    return (
        <Flex borderRadius="8px" bg="brand.brand.gray" variant="outline" borderWidth="2px" boxShadow="0 0 8px rgba(255, 255, 255, 0.6)" width="35%" height="30%" margin="2%">
            <Box paddingTop="1%" paddingLeft="2%">
                <Image src={imageUrl} alt="Icon" h="60%" />
            </Box>
            <Flex className="text-container" justifyContent="center" alignItems="center" width="100%" height="100%" flexDirection="column">
                <Text color="brand.50" textAlign="center" fontFamily="Mitr" fontSize="1.4rem" fontStyle="normal" fontWeight="400" lineHeight="normal" padding="2%">{titleText}</Text>
                    <Text color="brand.50" textAlign="center" fontFamily="Mitr" fontSize="1rem" fontStyle="normal" fontWeight="400" lineHeight="normal">{descriptionText}</Text>
                </Flex>
            </Flex>
    );
};

export default CharacteristicCard;