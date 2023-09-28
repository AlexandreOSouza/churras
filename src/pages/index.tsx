import Layout from "@/components/layout";
import Login from "@/components/forms/login";
import { Flex } from "@chakra-ui/react";

export default function index() {
  const onSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <Layout>
        <Flex width={{ base: "90vw", lg: "400px" }}>
          <Login onSubmit={onSubmit} />
        </Flex>
      </Layout>
    </>
  );
}
