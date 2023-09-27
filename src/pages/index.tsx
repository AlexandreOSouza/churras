import Layout from "@/components/layout";
import { TITLES } from "@/const/title";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>{TITLES.login}</title>
      </Head>
      <Layout>
        <h1>hello</h1>
      </Layout>
    </>
  );
}
