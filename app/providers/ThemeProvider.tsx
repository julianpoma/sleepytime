import React from 'react';
import { THEME } from '../utils';

const defaultContextData = {
  theme: THEME.LIGHT,
  toggleTheme: () => {},
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

export { useTheme, ThemeContext };
