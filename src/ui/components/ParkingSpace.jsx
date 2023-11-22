import React, { useState, useEffect } from "react";
import { Box, Image, Text, Select, Flex } from "@chakra-ui/react";
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
  if (i == 18) resultado = resultado - 3;

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
  const [occupancyStatus, setOccupancyStatus] = useState({});

  const [selectedSpace, setSelectedSpace] = useState(null); // Track the currently selected space

  const [numberSpace, setNumberSpace] = useState(null); // Track the currently selected space number

  const [carPositions, setCarPositions] = useState(
    new Array(spacePositions.length).fill(false)
  );

  useEffect(() => {
    // Handle ID to auto-select a space
    if (typeof id === 'number' && id >= 0 && id <= 44) {
      let col, index;
      if (id < 19) {
        col = "firstCol";
        index = id;
      } else if (id < 38) {
        col = "secondCol";
        index = id - 19;
      } else if (id < 44) {
        col = "thirdCol";
        index = id - 28;
      } else {
        col = "fourthCol";
        index = id - 40;
      }

      setSelectedSpace({ col, index });
      setNumberSpace(id);
    }
  }, [id]);


  const columnNumbering = {
    firstCol: 1,
    secondCol: 2,
    thirdCol: 3,
    fourthCol: 4,
  };

  useEffect(() => {
    console.log(numberSpace); // Log the updated numberSpace whenever it changes
  }, [numberSpace]);

  /* Este codigo es en teoria para jalar posiciones de ocupado de la API, para ejemplo en clase podemos hardcodearlo
    
    const placeCarInSpace = (index) => {
  setCarPositions(prevCarPositions => {
    const newCarPositions = [...prevCarPositions];
    newCarPositions[index] = true; // Place a car in the specified index
    return newCarPositions;
  });
};
    
    useEffect(() => {
  // Example API call
  fetch('/api/getCarPosition')
    .then(response => response.json())
    .then(data => {
      placeCarInSpace(data.spaceIndex);
    });
}, []);
    
    
    */

const handleSpaceClick = (col, index) => {
  if (carPositions[index]) {
    // If there's a car in this space, do not proceed
    return;
  }

  let spaceNumber;
  if (col === "firstCol") {
    spaceNumber = index;
  } else if (col === "secondCol") {
    spaceNumber = index + 19;
  } else if (col === "thirdCol") {
    spaceNumber = (index - 7) + 28;
  } else if (col === "fourthCol") {
    spaceNumber = (index - 7) + 40;
  }

  setSelectedSpaceNumber(spaceNumber); // Update the selected space number for the Select box

  const isSelected = selectedSpace?.col === col && selectedSpace?.index === index;
  setSelectedSpace(isSelected ? null : { col, index });
  startCountdown();
};
  


  const [selectedSpaces, setSelectedSpaces] = useState({
    firstCol: new Array(19).fill(false),
    secondCol: new Array(19).fill(false),
    thirdCol: new Array(12).fill(false),
    fourthCol: new Array(12).fill(false),
  });

  const [selectedSpaceNumber, setSelectedSpaceNumber] = useState(null);
  

  const handleSelectChange = (event) => {
    const spaceNumber = parseInt(event.target.value, 10) - 1;
    setSelectedSpaceNumber(spaceNumber);
    // Logic to visually select the space based on the dropdown
    // Assuming space numbers start from 0
    // You might need to adjust this logic based on your space numbering and layout
    let col, index;
    if (spaceNumber < 19) {
      col = "firstCol";
      index = spaceNumber;
    } else if (spaceNumber < 38) {
      col = "secondCol";
      index = spaceNumber - 19;
    } else if (spaceNumber < 50) {
      col = "thirdCol";
      console.log(spaceNumber);
      index = (spaceNumber-10) - 28;
    } else {
      col = "fourthCol";
      index = (spaceNumber-10) - 40;
    }
    setSelectedSpace({ col, index });
    startCountdown();
  };


  const countdownDuration = 3 * 60; // 3 minutes in seconds
  const [timer, setTimer] = useState(null);
  const [remainingTime, setRemainingTime] = useState(countdownDuration);

  // Function to start the countdown timer
  const startCountdown = () => {
    if (timer) {
      clearInterval(timer); // Clear any existing timer
    }
    setRemainingTime(countdownDuration);
    const newTimer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(newTimer); // Clear timer when it reaches zero
          resetSelection(); // Reset selection
          return countdownDuration;
        }
        return prevTime - 1;
      });
    }, 1000);
    setTimer(newTimer);
  };

  const resetSelection = () => {
    setSelectedSpace(null);
    setSelectedSpaceNumber(null);
    setNumberSpace(null);
    setRemainingTime(countdownDuration);
    if (timer) {
      clearInterval(timer);
    }
  };



  return (
    <>
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
          onClick={() => handleSpaceClick("firstCol", index)}
          cursor="pointer"
        >
          {selectedSpace &&
            selectedSpace.col === "firstCol" &&
            selectedSpace.index === index && (
              <Image src={ParkSelector} h="25px" w="65px" />
            )}
          {carPositions[index] && <Image src={CarVector} h="25px" w="65px" />}
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
          onClick={() => handleSpaceClick("secondCol", index)}
          cursor="pointer"
        >
          {selectedSpace &&
            selectedSpace.col === "secondCol" &&
            selectedSpace.index === index && (
              <Image src={ParkSelector} h="25px" w="65px" />
            )}
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
          onClick={() => handleSpaceClick("thirdCol", index)}
          cursor="pointer"
        >
          {selectedSpace &&
            selectedSpace.col === "thirdCol" &&
            selectedSpace.index === index && (
              <Image src={ParkSelector} h="25px" w="65px" />
            )}
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
          onClick={() => handleSpaceClick("fourthCol", index)}
          cursor="pointer"
        >
          {selectedSpace &&
            selectedSpace.col === "fourthCol" &&
            selectedSpace.index === index && (
              <Image src={ParkSelector} h="25px" w="65px" />
            )}
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
    <Flex align="center" justify="center" marginStart={20} maxW={600}>
    <Text
      fontSize={50}
      textAlign="center"
      pt={5}
      color="white"
      fontFamily="theme.fonts.body"
      fontWeight="bold"
    >
      Reserved:
    </Text>
    <Select
      value={selectedSpaceNumber !== null ? selectedSpaceNumber + 1 : ""}
      onChange={handleSelectChange}
      
      placeholder="Selected Parking Space"
      size="lg"
      mt={6}
      paddingStart={8}
      variant="filled"
    >
      {[...Array(62).keys()].map((num) => (
        <option key={num + 1} value={num + 1}>
          {num + 1}
        </option>
      ))}
    </Select>
  </Flex>
  <Flex
          align="center"
          justify="center"
          marginStart={20}
          maxW={600}
          direction={"column"}
        >
          <Text
            fontSize={50}
            textAlign="center"
            pt={5}
            color="white"
            fontFamily="theme.fonts.body"
            fontWeight="bold"
          >
            Time remaining:
          </Text>
          <Text fontSize={30} color="white">
          {Math.floor(remainingTime / 60)}:{String(remainingTime % 60).padStart(2, '0')} minutes
        </Text>
          
        </Flex>
  </>
  );
};

export default ParkingSpace;
