import React, { useEffect, useState } from "react";
import { Text, Box } from "@chakra-ui/react";
import theme from "../../theme";

const Cajon = 3;
const fetchTemperature = async () => {
    try {
      const response = await fetch(`http://localhost:3000/temp/${Cajon}`, {
        method: "GET",
      });
      const temperatureJson = await response.json();
      console.log("temperatureJson", temperatureJson[0]);
      return temperatureJson[0].valor;
    } catch (error) {
      console.error("Error fetching temperature:", error);
      return null;
    }
  };

const displayTemperature = () => {
    const [temperature, setTemperature] = useState(null);
    useEffect(() => {
      fetchTemperature()
        .then((temperatureValue) => {
          setTemperature(temperatureValue);
        })
        .catch((error) => {
          console.error("Error setting temperature:", error);
        });
    }, []);

    return (
        <Box border="1px solid #001F61" bg="brand.brand.gray" box-shadow="0px 0px 6px 0px brand.100 inset" width="40%" height="60%" margin="2%">
            <Text
            marginBottom={10}
                fontSize={30}
                textAlign="center"
                pt="5"
                color={"brand.100"}
                fontFamily={"theme.fonts.body"}
                fontWeight="bold"
            >
                {temperature !== null ? temperature : "Loading..."}
                 °C
            </Text>
        </Box>
    )};

export default displayTemperature;