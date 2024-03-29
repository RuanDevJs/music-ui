import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@/styles/Global";
import { theme } from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
