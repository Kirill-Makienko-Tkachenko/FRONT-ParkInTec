import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  colors: {
    brand: {
      50: "#0033A0",
      100: "#001F61",
      500: "#FF8D32",
      1000: "#E4060C",
      "brand.gray": "#D9D9D9"
    },
    signal: {
      red: "#E4060C",
      yellow: "#FF8D32",
      green: "#00928C",
      selected: "#F09F00"
    },
  },
  fonts: {
    heading: `'Mitr', mitr`,
    body: `'Mitr', mitr`,
    bold: `'Mitr.600', mitr.600`,
  },
  styles: {
    global: {
      "html, body": {
        width: "100%",
        overflowX: "hidden",
      },
    },
  },
  sizes: {
    xxl: "1200px",
  
  }
});

export default theme;
