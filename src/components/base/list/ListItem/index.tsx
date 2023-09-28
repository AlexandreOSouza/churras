import { ListItem as DefaultListItem, Flex, Text } from "@chakra-ui/react";
import CustomCheckbox from "../../checkbox/CustomCheckbox";
import { Participant } from "@/components/layout/schedule/types";

export default function ListItem({ name, amount, paid }: Participant) {
  return (
    <DefaultListItem>
      <Flex
        width={"100%"}
        borderBottom={"1px solid"}
        borderColor={"churras.light_yellow"}
        height={"40px"}
        alignItems={"center"}
        fontWeight={"700"}
        fontSize={"21px"}
        cursor={"pointer"}
      >
        <CustomCheckbox />
        <Text ml={"8px"}>{name}</Text>
        <Text ml={"auto"}>R$ {amount}</Text>
      </Flex>
    </DefaultListItem>
  );
}
