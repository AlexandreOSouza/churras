import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  onClick: () => void;
};

export default function AddButton({ onClick }: Props) {
  return (
    <Flex
      background={"churras.gray"}
      width={"282px"}
      height={"192px"}
      justifyContent={"center"}
      alignItems={"center"}
      boxShadow={"0px 0px 16px 0px rgba(0, 0, 0, 0.2)"}
      cursor={"pointer"}
      transition={"linear margin 0.1s"}
      _hover={{
        mt: -1,
        ml: -1,
      }}
      flexDirection={"column"}
      onClick={onClick}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        background={"churras.primary_yellow"}
        width={"100px"}
        height={"100px"}
        borderRadius={"full"}
        color={"churras.gray"}
      >
        <Image
          src={"/assets/icons/grill.png"}
          width={40}
          height={40}
          alt={"grill icon"}
        />
      </Flex>
      <Text fontSize={"21px"} color={"churras.black"} fontWeight={"bold"}>
        Adicionar churras
      </Text>
    </Flex>
  );
}
