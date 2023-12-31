import Layout from "@/components/layout";
import Login from "@/components/forms/login";
import { Flex } from "@chakra-ui/react";
import { LoginFormValues } from "@/components/forms/login/types";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "@/hooks/useLogin";

export default function Index() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { handleLogin, handleCreate } = useAuth();

  const onSubmit = (e: LoginFormValues) => {
    setIsLoading(true);
    handleLogin(e)
      .then(() => router.push("/schedule"))
      .catch((e) => console.error("error trying to log in", e))
      .finally(() => setIsLoading(false));
  };

  const onCreate = (e: LoginFormValues) => {
    setIsLoading(true);
    handleCreate(e)
      .then(() => router.reload())
      .catch(() => console.error("error create user"))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Layout>
        <Flex width={{ base: "90vw", lg: "400px" }}>
          <Login
            onSubmit={onSubmit}
            onCreate={onCreate}
            isLoading={isLoading}
          />
        </Flex>
      </Layout>
    </>
  );
}
