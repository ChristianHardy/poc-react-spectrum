import React, { useState } from 'react';
import { ThemeContext } from './_useThemeContext';
import { ColorScheme, ThemeContextValue } from './__types';

export function ThemeProvider(props: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ColorScheme>('light');

  const switchMode = (): ColorScheme => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    return newTheme;
  };

  const value: ThemeContextValue = {
    theme,
    switchMode,
  };

  return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>
}
