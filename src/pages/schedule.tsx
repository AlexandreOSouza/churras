import Layout from "@/components/layout";
import Schedule from "@/components/layout/schedule";
import { auth } from "@/config/firebase";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function List() {
  const router = useRouter();
  useEffect(() => {
    if (!auth.currentUser?.uid) {
      router.push("/");
    }
  }, [router]);
  return (
    <Layout>
      {auth.currentUser?.uid && (
        <Flex>
          <Schedule />
        </Flex>
      )}
    </Layout>
  );
}
