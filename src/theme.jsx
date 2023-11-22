import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  colors: {
    brand: {
      50: "#0033A0", //Azul Tec
      100: "#001F61", //Azul Rey
      101: "#002981", //Azul oscuro
      102: "#0044D4", //Azul normal
      103: "#0D59FB", //Azul claro
      500: "#FF8D32", //Amarillo
      1000: "#E4060C", //Rojo
      2000: "#00928C", //Verde
      "brand.gray": "#D9D9D9"
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
