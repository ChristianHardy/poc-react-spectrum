export type ColorScheme = 'light' | 'dark';

export type ThemeContextValue = {
  /**
   * The current color scheme
   */
  theme: ColorScheme | undefined;
  /**
   * Function to switch the color scheme,
   * return the new color scheme
   */
  switchMode: () => ColorScheme;
};