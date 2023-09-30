import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import colors from "./components/colors";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors,
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        margin: 0,
        padding: 0,
        fontFamily: "body",
        bg: "churras.white",
        lineHeight: "base",
      },
    }),
  },
});

export default theme;
