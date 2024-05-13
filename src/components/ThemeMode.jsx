import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
//      mainBackgroundColor: '#ff3800',
      mainBackgroundColor: '#ff3800',
      navBackgroundColor: 'rgba(255, 150, 100)',
//      navBackgroundColor: 'rgba(255, 56, 0, 0.7)',
      buttonBackgroundColor: '#155263',
      spanBackgroundColor: '#155263',
      navDivbackgroundColor: 'rgb(255, 100, 50)',
      technologiesBackgroundColor: 'rgb(255, 100, 50)',
      technologiesBorder: '1px solid #ff3800',
      technologiesPercentagesBackgroundColor: '#155263',
      technologiesPercentagesBorder: '1px solid #ff3800',
      h3BackgroundColor: '#155263',
      labelsBackgroundColor: 'rgb(255, 100, 50)',
  });

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, changeTheme}}
>      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
  
