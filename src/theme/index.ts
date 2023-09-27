import { extendTheme } from "@chakra-ui/react";
import colors from "./components/colors";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors,
  config,
});

export default theme;
