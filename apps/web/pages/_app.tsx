import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { queryClient } from "../components/react-query";
import { QueryClientProvider } from "react-query";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
console.log("publicRuntimeConfig", publicRuntimeConfig);
console.log("process.env.AUTH0_SECRET\n");
console.log(process.env.NEXT_PUBLIC_BACKEND_API);

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
