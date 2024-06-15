import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { Button, useColorMode } from "@chakra-ui/react";
import ChatUI from './components/ChatUI';

function App({ colorMode, setColorMode }) {
  const { toggleColorMode } = useColorMode();

  const handleToggle = () => {
    toggleColorMode();
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <Button onClick={handleToggle} position="absolute" top="1rem" right="1rem">
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/chat" element={<ChatUI />} />
      </Routes>
    </Router>
  );
}

export default App;