import { Anchor, Button, Stack, Text } from "@mantine/core";
import Head from "next/head";
import { Posts } from "../components/post";

export default function Home() {
  return (
    <>
      <Head>
        <title>今日最AI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Posts></Posts>
    </>
  );
}
