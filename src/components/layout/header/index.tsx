import { Flex } from "@chakra-ui/react";

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
        backgroundImage={"url(./assets/imgs/bg_pattern.png)"}
        width={"100%"}
        height={"100%"}
        zIndex={-1}
      ></Flex>
    </Flex>
  );
}
