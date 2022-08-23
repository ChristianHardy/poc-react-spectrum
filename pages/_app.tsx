import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SSRProvider, ThemeProvider } from '../Providers/Theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </ThemeProvider>
  );
}

export default MyApp
