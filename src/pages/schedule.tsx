import Layout from "@/components/layout";
import Schedule from "@/components/layout/schedule";
import { useAuth } from "@/hooks/useLogin";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function List() {
  const { isLogin } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/");
    }
  }, [isLogin]);

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
