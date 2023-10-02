import { useAuth } from "@/hooks/useLogin";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function Header() {
  const { isLogin, handleLogout } = useAuth();

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
          {isLogin && (
            <Button colorScheme="red" onClick={handleLogout}>
              logout
            </Button>
          )}
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
