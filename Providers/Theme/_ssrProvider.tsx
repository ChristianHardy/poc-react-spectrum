import { defaultTheme, Provider, ProviderProps, SSRProvider as AdobeSSRProvider } from '@adobe/react-spectrum';
import { ReactNode } from 'react';
import { useThemeContext } from './_useThemeContext';

export interface SSRProviderProps {
  children: ReactNode;
}

function SSRProvider(props: SSRProviderProps) {
  /**
   * Hooks
   */
  const { theme } = useThemeContext();

  /**
   * Initializers
   */
   const providerProps: ProviderProps = {
    children: props.children,
    theme: defaultTheme,
    colorScheme: theme,
  };

  /**
   * Renders
   */
  return (
    <AdobeSSRProvider>
      <Provider {...providerProps}/>
    </AdobeSSRProvider>
  );
}

export { SSRProvider };
