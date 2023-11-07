import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#0033A0",
      100: "#001F61",
      500: "#FF8D32",
      1000: "#E4060C",
    },
  },
  fonts: {
    heading: `'Mitr', mitr`,
    body: `'Mitr', mitr`,
  },
  styles: {
    global: {
      "html, body": {
        width: "100%",
        overflowX: "hidden", // This can help ensure that no horizontal scroll is happening because of an overflow
      },
    },
  },
});

export default theme;
