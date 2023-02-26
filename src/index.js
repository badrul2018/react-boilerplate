import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
const rootElement = document.getElementById("root");

// Wrap your App component with createRoot
const root = ReactDOM.createRoot(rootElement);

// Use the new render method to render your app
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
