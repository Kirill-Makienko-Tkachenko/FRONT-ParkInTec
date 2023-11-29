import React from "react";
import Header from "../components/Header";
import CharacteristicCard from "../components/CharacteristicCard";
import DeveloperProp from "../components/DeveloperProp";
import { Text, Box, Image, Select, Flex, Heading} from "@chakra-ui/react";

import "@fontsource/mitr/400.css";

function AboutUsPage() {
    return(
        <>
        <Box>
            <Header />
            <Box bg="brand.50" width="100vw" height="50vh">
                <Flex className="textContainer-1" justifyContent="center" width="100%" padding="1%">
                    <Heading color = "signal.selected" text-align = "center" font-family="Mitr" fontSize="2.3rem" font-style="normal" font-weight="400" line-height="normal" padding=".5%" marginTop=".4rem" >Effortlessly</Heading>
                    <Heading color = "#FFFFFF" text-align = "center" font-family="Mitr" fontSize="2.3rem" font-style="normal" font-weight="400" line-height="normal" padding=".5%" marginTop=".4rem">Navigate and Park with</Heading>
                    <Heading color = "signal.selected" text-align = "center" font-family="Mitr" fontSize="2.3rem" font-style="normal" font-weight="400" line-height="normal" padding=".5%" marginTop=".4rem" >Precision</Heading>
                </Flex>
                <Flex justifyContent="center" alignItems="center" w="100%" padding="1%">
                    <Flex className="textContainer-3" justifyContent="center" width="60%" justifySelf="center">
                        <Text color="#FFF" textAlign="center" fontFamily="Mitr"  fontStyle="normal" fontWeight="400" lineHeight="normal" fontSize="1.05rem">
                            At ParkInTec, we're revolutionizing the parking experience for the Tec Community with our cutting-edge, IoT-powered solutions. We're dedicated to leveraging 
                            the power of IoT to create a smarter, more connected campus experience. Join us in driving towards a more efficient, tech-enabled future.
                        </Text>
                    </Flex>
                </Flex>
                <Flex className="characteristics-container" h="100%">
                    <CharacteristicCard
                        imageUrl="src/assets/real-time-icon.svg"
                        titleText="Real-Time Availability Tracking"
                        descriptionText="At ParkInTec, sensors in each parking space communicate directly with our database, delivering instant updates on availability."
                    />
                    <CharacteristicCard
                        imageUrl="src/assets/privacy-icon.svg"
                        titleText="Data Privacy and Security"
                        descriptionText="Ensuring paramount security for your data is our commitment. With strict privacy measures, we provide reassurance in the parking experience."
                    />
                    <CharacteristicCard
                        imageUrl="src/assets/future-icon.svg"
                        titleText="Vision for the Future"
                        descriptionText="We strive for parking innovations that are efficient and connected. Join us as we redefine the future of parking experiences."
                    />
                </Flex>
            </Box>
            <Box bg="#FFFFFF" width="100vw" height="6vh">
                <Flex className="textContainer-4" justifyContent="center" alignItems="center" width="100%" height="100%" padding="1%">
                    <Heading color = "brand.50" text-align = "center" font-family="Mitr" fontSize="2.25rem" font-style="normal" font-weight="400" line-height="normal" padding=".5%">Developers</Heading>
                </Flex>
            </Box>
            <Box bg="brand.brand.gray" width="100vw" height="50vh" overflow="hidden">
                
                <Flex className="developers-container" justifyContent="center" alignItems="center" h="100%" mt={12}>
                    <DeveloperProp
                        imageUrl="src\assets\Desiree.jpg" 
                        headingText="Desirée Espinosa" 
                        bodyText="Project Manager / Front-End Developer / UX & UI"
                    />
                    <DeveloperProp
                        imageUrl="src\assets\Dulce.JPG" 
                        headingText="Dulce Bucio" 
                        bodyText="Front-End and Back-End Developer / UX & UI / Electronics"
                    />
                    <DeveloperProp
                        imageUrl="src\assets\Kirill.jpg" 
                        headingText="Kirill Makienko" 
                        bodyText="Front-End / Back-End Developer "
                    />
                </Flex>
            </Box>
            
        </Box>
        </>
    )
}

export default AboutUsPage;