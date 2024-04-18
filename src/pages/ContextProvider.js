import React, { useState, useContext, createContext } from "react";

// 1. Create the context
const ThemeContext = createContext('light');

function ContextProvider() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'grey' : 'light');
  };

  const contextValue = { theme, toggleTheme };

  return (
    //2. Wrap the child
    <ThemeContext.Provider value={contextValue}>
      <ChangeTheme/>
    </ThemeContext.Provider>
  );
}

function ChangeTheme() {
  //3. Use Context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === "light" ? 'white' : 'grey' }}>
      <button type="button" onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default  ContextProvider; // Export the Context Provider for use
