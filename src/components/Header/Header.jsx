import React from 'react';
import { Flex, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";

function Header() {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);

  const handleThemeChange = () => {
    toggleColorMode();
  };

  return (
    <Flex justify="flex-end" align="center" p="25">
      
      <IconButton
        aria-label="Toggle Theme"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={handleThemeChange}
      />
    </Flex>
  );
}

export default Header;
