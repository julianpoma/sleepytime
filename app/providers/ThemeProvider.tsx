import React from 'react';

const defaultContextData = {
  theme: 'light',
  toggleTheme: () => {},
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

export { useTheme, ThemeContext };
