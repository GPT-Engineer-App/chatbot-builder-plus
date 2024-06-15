import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { ColorModeProvider, CSSReset } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const Main = () => {
  const [colorMode, setColorMode] = useState("light");

  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={{ initialColorMode: "light", useSystemColorMode: false }}>
        <CSSReset />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App colorMode={colorMode} setColorMode={setColorMode} />
      </ColorModeProvider>
    </ChakraProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
