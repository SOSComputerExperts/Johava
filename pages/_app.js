import "theme/styles/globals.css";
import { ThemeProvider } from "styled-components";
import { themeConfig } from "theme/config";

import Header from "components/Nav";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themeConfig}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
