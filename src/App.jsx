import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import React, { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
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
  );
}
