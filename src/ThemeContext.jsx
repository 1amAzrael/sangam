// src/ThemeContext.js
import React, { createContext, useContext, useState } from "react";

// Create a Theme Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // Initial theme mode set to dark

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for using Theme Context
export const useTheme = () => useContext(ThemeContext);
