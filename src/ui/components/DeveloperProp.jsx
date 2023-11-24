import React from 'react';
import { Flex, Box, Image, Text, Heading } from '@chakra-ui/react'; 

const DeveloperProp = ({ imageUrl, headingText, bodyText }) => {
    return (
        <Flex className="developer-container" justifyContent="center" alignItems="center" flexDirection="column" h="100%" w="30%"  >
            <Image
                borderRadius='full'
                boxSize='200px'
                marginTop="-40%"
                src={imageUrl}
                alt='Profile Image'
                fill="brand.brand.gray"
                stroke-width="2px"
                stroke="#0033A0"
                filter= "drop-shadow(0px 0px 10px #000)"
                objectFit="cover"
            />
            <Heading color = "brand.50" text-align = "center" font-family="Mitr" font-size="48px" font-style="normal" font-weight="400" line-height="normal" padding=".5%" marginTop="9px" >{headingText}</Heading>
            <Text color="brand.50" textAlign="center" fontFamily="Mitr"  fontStyle="normal" fontWeight="400" lineHeight="normal">
                {bodyText}
            </Text>
        </Flex>
    );
};

export default DeveloperProp;
