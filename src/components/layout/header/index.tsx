import { auth } from "@/config/firebase";
import { Button, Flex, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const handleLogout = async () => {
    signOut(auth).then(() => {
      router.push("/");
    });
  };
  return (
    <Flex
      width={"100%"}
      height={"300px"}
      background={
        "linear-gradient(to bottom, transparent 80%, rgba(255, 216, 54, 1) 100%)"
      }
    >
      <Flex
        width={"100%"}
        height={"100%"}
        background={"churras.primary_yellow"}
        flexDirection={"column"}
      >
        <Flex
          position={"absolute"}
          width={"100%"}
          justifyContent={"flex-end"}
          p={4}
        >
          <Button colorScheme="red" onClick={handleLogout}>
            logout
          </Button>
        </Flex>
        <Flex
          backgroundImage={"url(/assets/imgs/bg_pattern.png)"}
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            fontSize={"48px"}
            fontWeight={"bold"}
            textAlign={"center"}
            color={"churras.black"}
          >
            Agenda de Churras
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
