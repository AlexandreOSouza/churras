import { Flex, HStack, Text } from "@chakra-ui/react";
import { Churras } from "../layout/schedule/types";
import { GoPeople } from "react-icons/go";
import { HiCurrencyDollar } from "react-icons/hi";

type Props = {
  churras: Churras;
};

export default function Card({ churras }: Props) {
  return (
    <Flex
      background={"churras.white"}
      flexDirection={"column"}
      width={"282px"}
      height={"192px"}
      p={4}
      justifyContent={"space-between"}
      boxShadow={"0px 0px 16px 0px rgba(0, 0, 0, 0.2)"}
      cursor={"pointer"}
      transition={"linear margin 0.1s"}
      _hover={{
        mt: -1,
        ml: -1,
      }}
    >
      <Flex flexDirection={"column"}>
        <Text fontSize={"32px"} fontWeight={"bold"} color={"churras.black"}>
          {churras.date}
        </Text>
        <Text fontSize={"24px"} color={"churras.black_08"}>
          {churras.description}
        </Text>
      </Flex>
      <HStack justifyContent={"space-between"}>
        <Flex
          color={"churras.light_yellow"}
          alignItems={"center"}
          columnGap={2}
        >
          <GoPeople fontSize={"20px"} />
          <Text color={"churras.black"} fontSize={"21px"}>
            {churras.participants}
          </Text>
        </Flex>
        <Flex
          color={"churras.light_yellow"}
          alignItems={"center"}
          columnGap={2}
        >
          <HiCurrencyDollar fontSize={"20px"} />
          <Text color={"churras.black"} fontSize={"21px"}>
            R${churras.totalAmount}
          </Text>
        </Flex>
      </HStack>
    </Flex>
  );
}
