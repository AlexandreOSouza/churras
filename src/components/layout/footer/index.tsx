import { Flex, Image } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex width={"100%"} justifyContent={"center"} mb={"50px"}>
      <Image
        alt={"trinca logo"}
        src={"./assets/imgs/trinca_logo.png"}
        width={"48px"}
        height={"48px"}
      />
    </Flex>
  );
}
