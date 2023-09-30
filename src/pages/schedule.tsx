import Layout from "@/components/layout";
import Schedule from "@/components/layout/schedule";
import { Flex } from "@chakra-ui/react";

export default function List() {
  return (
    <Layout>
      <Flex>
        <Schedule />
      </Flex>
    </Layout>
  );
}
