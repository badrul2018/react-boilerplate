import { extendBaseTheme } from "@chakra-ui/react";

const lightTheme = {
  colors: {
    primary: "#007aff",
    secondary: "#ff3b30",
    gray: {
      50: "#f9f9f9",
      100: "#f2f2f2",
      200: "#e5e5e5",
      300: "#d9d9d9",
      400: "#cccccc",
      500: "#bfbfbf",
      600: "#b3b3b3",
      700: "#a6a6a6",
      800: "#999999",
      900: "#8c8c8c",
    },
  },
};

const darkTheme = {
  colors: {
    primary: "#0a84ff",
    secondary: "#ff453a",
    gray: {
      50: "#1c1c1e",
      100: "#2c2c2e",
      200: "#3a3a3c",
      300: "#48484a",
      400: "#545456",
      500: "#636366",
      600: "#717173",
      700: "#8e8e93",
      800: "#aeaeb2",
      900: "#c7c7cc",
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.100',
        color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
      input: {
        color:'gray.500',
      }
    },
  },
};

const theme = extendBaseTheme({ light: lightTheme, dark: darkTheme });

export default theme;
