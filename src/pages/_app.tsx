import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import { useRouter } from "next/router";
import { TITLES } from "@/const/title";
import { Titles } from "@/types/commun";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname.replace("/", "");
  const title =
    pathname.length === 0 ? TITLES.login : TITLES[pathname as Titles];
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
