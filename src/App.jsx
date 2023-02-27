import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import theme from "./theme/theme";
import ThemeContext from "./theme/ThemeContext";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [colorMode, setColorMode] = useState("light");

  const toggleColorMode = () => {
    console.log(colorMode + " context");
    setColorMode(colorMode === "light" ? "dark" : "light");
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
    <ChakraProvider theme={theme[colorMode]}>
      <Header/>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Hello, world!</h1>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        className="px-4 py-2 mb-4 border border-gray-400 rounded"
        name="todo"
      />
      <Button
        colorScheme="blue"
        onClick={() => alert(`You entered: ${inputValue}`)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </Button>
    </div>
    </ChakraProvider>
    </ThemeContext.Provider>
  );
}
