import { Text } from "@chakra-ui/react";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <Text fontSize={"25px"} color={"churras.primary_yellow"}>
        Hello
      </Text>
    </>
  );
}
