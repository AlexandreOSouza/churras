import Layout from "@/components/layout";
import Login from "@/components/forms/login";
import { Flex } from "@chakra-ui/react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { LoginFormValues } from "@/components/forms/login/types";
import { auth } from "@/config/firebase";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Index() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (e: LoginFormValues) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, e.email, e.password)
      .then(() => router.push("/schedule"))
      .catch((e) => console.error("error trying to log in", e))
      .finally(() => setIsLoading(false));
  };

  const onCreate = (e: LoginFormValues) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, e.email, e.password)
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
