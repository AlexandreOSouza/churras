import Layout from "@/components/layout";
import Login from "@/components/forms/login";
import { TITLES } from "@/const/title";
import Head from "next/head";

export default function index() {
  const onSubmit = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <Head>
        <title>{TITLES.login}</title>
      </Head>
      <Layout>
        <Login onSubmit={onSubmit} />
      </Layout>
    </>
  );
}
