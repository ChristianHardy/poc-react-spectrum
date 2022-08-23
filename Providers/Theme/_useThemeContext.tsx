import React, { useContext } from 'react';
import { ThemeContextValue } from './__types';

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: 'light',
  switchMode: () => 'light',
});

function useThemeContext(): ThemeContextValue {
  return useContext(ThemeContext);
}

export { ThemeContext, useThemeContext };

