import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";
import { ThemeProvider, createTheme } from "@mui/material";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      test: {
        main: "#CCC",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
