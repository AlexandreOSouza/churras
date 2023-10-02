import Layout from "@/components/layout";
import Schedule from "@/components/layout/schedule";
import { useAuth } from "@/hooks/useLogin";
import { Flex } from "@chakra-ui/react";

export default function List() {
  const { isLogin } = useAuth();

  return (
    <Layout>
      {isLogin && (
        <Flex>
          <Schedule />
        </Flex>
      )}
    </Layout>
  );
}
