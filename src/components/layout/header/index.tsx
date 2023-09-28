import { Flex, Text } from "@chakra-ui/react";

export default function Header() {
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
      >
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
