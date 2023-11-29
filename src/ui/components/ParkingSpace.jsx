import React, { useState, useEffect } from "react";
import { Box, Image, Text, Select, Flex } from "@chakra-ui/react";
import Cuadricula from "../../assets/Group 1.svg";
import CarVector from "../../assets/noun-car-top-view-3914609 5.svg"; // Unused in this snippet, meant to mean occupied space
import ParkSelector from "../../assets/Rectangle 18.png";

/*

  Estimada alma caritativa que esta revisando este codigo, porfavor, hazte un favor y no lo revises.
  Esto es una amalgamacion de cosas que tuve que hacer en putiza para que sirva, la verdad ni yo entiendo que chingados esta escrito aqui
  Si por alguna razon tienes que revisar esto te sugiero que lo pases por alguna IA para que lo explique
  Voy a intentar comentar esto de la mejor manera para que sea entendible, aparte de que esto probablemente podria ser abstraido mucho mas
  En todo caso, gracias por visitar :)

*/

// Esto es la mejor manera de calcular las posiciones en las cuales deben de ir los cuadros naranjas, calcula relativo a un punto de partida
// Es esto o hacer un array con cada posicion, que la verdad no estoy dispuesto a hacer
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

  spacePositions.push({
    position: `${resultado}px`,
    id: `firstCol-${i}`, // Unique ID for each space
  });
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
  spacePositions2.push({
    position: `${resultado}px`,
    id: `secondCol-${i - 7}`, // Adjust the index for the second array
  });
}

const ParkingSpace = () => {
  const [selectedSpace, setSelectedSpace] = useState(null); // Track the currently selected space - Meaning the "Coordinate" of the parking space, for example col: 1st col and 5th space, in a JSON, refer to commented line 112

  // Refering to the above useState, the 1st col is actually the larger inner one whilst the 2nd is the lager outer one, on the right, so they are not in order.

  const [selectedSpaceNumber, setSelectedSpaceNumber] = useState(null); // Track the currently selected space number, from 1 to 62

  const [occupiedSpaces, setOccupiedSpaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reserved")
      .then((response) => response.json())
      .then((data) => {
        const occupied = data.map((item) => item.idCajon);
        console.log(occupied);
        setOccupiedSpaces(occupied);
      });
  }, []);

  const addOccupation = (spaceNumber) => {
    fetch(`http://localhost:3000/ocupacion/${spaceNumber}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idCajon: spaceNumber,
        Status: 1,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data if needed
        console.log("Parking space updated successfully");
      })
      .catch((error) => {
        // Handle errors if the request fails
        console.error("Error updating parking space:", error);
      });
  };

  const removeOccupation = (spaceNumber) => {
    fetch(`http://localhost:3000/ocupacion/${spaceNumber}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({
        idCajon: spaceNumber,
        Status: 0,   
      }),
    })
      .then((response) => {
        if (!response.ok) { 
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data if needed
        console.log("Parking space updated successfully");
        
      })
      .catch((error) => {
        // Handle errors if the request fails
        console.error("Error updating parking space:", error);
      });
  };


  /*useEffect(() => {
    console.log(numberSpace); // This "Asynchronously" (When the value gets updated)  will print the calculated number space from line 96
  }, [numberSpace]);*/

  const handleSpaceClick = (col, index) => {
    // Used to handle whenever a click is made in the parking "board"

    let absoluteIndex;
    //This section is to acctually calculate the parking space number
    if (col === "firstCol") {
      setSelectedSpaceNumber(index);
      absoluteIndex = index;
    } else if (col === "secondCol") {
      setSelectedSpaceNumber(index + 19);
      absoluteIndex = index + 19;
    } else if (col === "thirdCol") {
      setSelectedSpaceNumber(index + 38);
      absoluteIndex = index + 38;
    } else if (col === "fourthCol") {
      setSelectedSpaceNumber(index + 50);
      absoluteIndex = index + 50;
    }

    if (occupiedSpaces.includes(absoluteIndex)) {
      // If there's a car in this space, do not proceed
      return;
    }
    // Checks if the space is already selected, if it is, it will deselect it
    const isSelected =
    selectedSpace?.col === col && selectedSpace?.index === index;

  if (isSelected) {
    // If deselecting the space
    resetSelection();
    removeOccupation(absoluteIndex); // Remove occupation
  } else {
    // If selecting a new space
    if (!occupiedSpaces.includes(absoluteIndex)) {
      setSelectedSpace({ col, index });
      setSelectedSpaceNumber(absoluteIndex);
      startCountdown();
      addOccupation(absoluteIndex); // Add occupation
    }
  }
};

  const handleSelectChange = (event) => {
    // This is to handle the dropdown menu, it will set the selected space number to the value of the dropdown, this is the actual logic for that
    const spaceNumber = parseInt(event.target.value, 10) - 1; // Gets the value of the dropdown and subtracts 1 to get the actual index of the space, esta funcion es rarita no la programe yo, lo hizo ChatGPT
    setSelectedSpaceNumber(spaceNumber);

    if (!occupiedSpaces.includes(spaceNumber)) {
      setSelectedSpaceNumber(spaceNumber);
      // Additional logic to visually select the space...
    } else {
      // Optionally, reset the dropdown to its previous value or a default value
      // if the selected space is occupied.
      // For example, you might reset it to the previously selected space number:
      setSelectedSpaceNumber(prev => prev);
      // Or reset it to a default value like null:
      // setSelectedSpaceNumber(null);
    }
    // Logic to visually select the space based on the dropdown
    // Assuming space numbers start from 0
    // You might need to adjust this logic based on your space numbering and layout
    let col, index;
    if (spaceNumber < 19) {
      col = "firstCol";
      console.log(spaceNumber);
      index = spaceNumber;
    } else if (spaceNumber < 38) {
      col = "secondCol";
      console.log(spaceNumber);
      index = spaceNumber - 19;
    } else if (spaceNumber < 50) {
      col = "thirdCol";
      console.log(spaceNumber);
      index = spaceNumber - 10 - 28;
    } else {
      col = "fourthCol";
      index = spaceNumber - 10 - 40;
    }
    setSelectedSpace({ col, index });
    if (selectedSpaceNumber === spaceNumber) {
      resetSelection(); // Reset selection and stop the timer
    } else {
      startCountdown(); // Start the countdown timer
    }
  };

  /**
   * A partir de aqui ya no tengo tiempo de comentar mas, pero basicamente esto es para el timer, mucha suerte
   */

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
    if (selectedSpaceNumber !== null) {
      removeOccupation(selectedSpaceNumber);
    }
  
    setSelectedSpace(null);
    setSelectedSpaceNumber(null);
    setRemainingTime(countdownDuration);
  
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  return (
    <>
      <Box>
        {spacePositions.map(({ position, id }, index) => (
          <Box
            key={id}
            position="absolute"
            top={position}
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
            {occupiedSpaces.includes(index) && index >= 0 && index < 19 && (
              <Image src={CarVector} h="25px" w="65px" />
            )}
          </Box>
        ))}
        {spacePositions.map(({ position, id }, index) => (
          <Box
            key={id}
            position="absolute"
            top={position}
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
            {occupiedSpaces.includes(index + 19) && (
              <Image src={CarVector} h="25px" w="65px" />
            )}
          </Box>
        ))}
        {spacePositions2.map(({ position, id }, index) => (
          <Box
            key={id}
            position="absolute"
            top={position}
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
            {occupiedSpaces.includes(index + 38) && (
              <Image src={CarVector} h="25px" w="65px" />
            )}
          </Box>
        ))}
        {spacePositions2.map(({ position, id }, index) => (
          <Box
            key={id}
            position="absolute"
            top={position}
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
            {occupiedSpaces.includes(index + 50) && (
              <Image src={CarVector} h="25px" w="65px" />
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
            <option
              key={num + 1}
              value={num + 1}
              disabled={occupiedSpaces.includes(num)}
            >
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
          {Math.floor(remainingTime / 60)}:
          {String(remainingTime % 60).padStart(2, "0")} minutes
        </Text>
      </Flex>
    </>
  );
};

export default ParkingSpace;
