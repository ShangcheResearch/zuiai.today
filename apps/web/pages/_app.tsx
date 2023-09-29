import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { queryClient } from "../components/react-query";
import { QueryClientProvider } from "react-query";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

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
        <UserProvider>
          <MantineProvider withGlobalStyles withNormalizeCSS theme={{}}>
            {/* @ts-ignore*/}
            <Component {...pageProps} />
          </MantineProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}
