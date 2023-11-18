import React, { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import Cuadricula from "../../assets/Group 1.svg";
import CarVector from "../../assets/noun-car-top-view-3914609 5.svg"; // Unused in this snippet
import ParkSelector from "../../assets/Rectangle 18.png";

// Enum or array of top positions for each parking space



const spacePositions = [];
for (let i = 0; i < 19; i++) {
    let resultado = 220 + i * 29;
    if (i > 4 && i < 8) {
        resultado = resultado - 2.5;
    }
    if (i > 7 && i < 11) {
        resultado = resultado - 3.5;
    }
    if (i > 10 && i < 18) {
        resultado = resultado - 5;
    }
    if (i == 18)
        resultado = resultado - 3;


    spacePositions.push(`${resultado}px`);

}

const spacePositions2 = [];
for (let i = 7; i < 19; i++) {
    let resultado = 220 + i * 29;
    if (i > 4 && i < 8) {
        resultado = resultado - 2.5;
    }
    if (i > 7 && i < 11) {
        resultado = resultado - 3.5;
    }
    if (i > 10) {
        resultado = resultado - 5;
    }
    spacePositions2.push(`${resultado}px`);

}


const ParkingSpace = ({ id, status, onSelect }) => {

    const [selectedSpaces, setSelectedSpaces] = useState({
        firstCol: new Array(19).fill(false),
        secondCol: new Array(19).fill(false),
        thirdCol: new Array(12).fill(false), // Assuming there are 12 spaces in the third column
        fourthCol: new Array(12).fill(false),
      });

    

  // Function to handle parking space selection
  const toggleSelection = (col, index) => {
    setSelectedSpaces(prevSpaces => ({
      ...prevSpaces,
      [col]: prevSpaces[col].map((selected, idx) => idx === index ? !selected : selected),
    }));
  };

  return (
    <Box>
      {spacePositions.map((topPosition, index) => (
        <Box
          key={`firstCol-${index}`}
          position="absolute"
          top={topPosition}
          right="490px"
          zIndex={10}
          h="25px"
          w="65px"
          onClick={() => toggleSelection('firstCol', index)}
          cursor="pointer"
        >
          {selectedSpaces.firstCol[index] && <Image src={ParkSelector} h="25px" w="65px" />}
        </Box>
      ))}
      {spacePositions.map((topPosition, index) => (
        <Box
          key={`secondCol-${index}`}
          position="absolute"
          top={topPosition}
          right="420px"
          zIndex={10}
          h="25px"
          w="65px"
          onClick={() => toggleSelection('secondCol', index)}
          cursor="pointer"
        >
          {selectedSpaces.secondCol[index] && <Image src={ParkSelector} h="25px" w="65px" />}
        </Box>
      ))}
      {spacePositions2.map((topPosition, index) => (
        <Box
          key={`thirdCol-${index}`}
          position="absolute"
          top={topPosition}
          right="625px"
          zIndex={10}
          h="25px"
          w="65px"
          onClick={() => toggleSelection('thirdCol', index)}
          cursor="pointer"
        >
          {selectedSpaces.thirdCol[index] && <Image src={ParkSelector} h="25px" w="65px" />}
        </Box>
      ))}
      {spacePositions2.map((topPosition, index) => (
        <Box
          key={`fourthCol-${index}`}
          position="absolute"
          top={topPosition}
          right="694px"
          zIndex={10}
          h="25px"
          w="65px"
          onClick={() => toggleSelection('fourthCol', index)}
          cursor="pointer"
        >
          {selectedSpaces.fourthCol[index] && <Image src={ParkSelector} h="25px" w="65px" />}
        </Box>
      ))}
      <Image
        src={Cuadricula}
        boxSize={"780px"}
        bg={"#D9D9D9"}
        position={"absolute"}
        top={40}
        right={"200px"}
        padding={"50px"}
      />
    </Box>
  );
};

export default ParkingSpace;

