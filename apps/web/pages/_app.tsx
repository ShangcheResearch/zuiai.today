import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { queryClient } from "../components/react-query";
import { QueryClientProvider } from "react-query";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  // @ts-ignore
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{}}>
          {/* @ts-ignore*/}
          <Component {...pageProps} />
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}
