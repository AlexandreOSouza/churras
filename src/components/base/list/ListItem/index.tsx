import { ListItem as DefaultListItem, Flex, Text } from "@chakra-ui/react";
import CustomCheckbox from "../../checkbox/CustomCheckbox";
import { Participant } from "@/components/layout/schedule/types";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  onSelect: () => void;
  onDelete: () => void;
} & Participant;

export default function ListItem({
  name,
  amount,
  paid,
  onSelect,
  onDelete,
}: Props) {
  return (
    <DefaultListItem
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      columnGap={4}
    >
      <Flex
        width={"100%"}
        borderBottom={"1px solid"}
        borderColor={"churras.light_yellow"}
        height={"40px"}
        alignItems={"center"}
        fontWeight={"700"}
        fontSize={"21px"}
        cursor={"pointer"}
        onClick={onSelect}
      >
        <CustomCheckbox isChecked={paid} />
        <Text ml={"8px"}>{name}</Text>
        <Text ml={"auto"} textDecoration={paid ? "line-through" : ""}>
          R$ {amount}
        </Text>
      </Flex>
      <Flex
        background={"red"}
        width={"24px"}
        height={"24px"}
        borderRadius={"full"}
        color={"churras.white"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={onDelete}
        cursor={"pointer"}
      >
        <IoCloseOutline />
      </Flex>
    </DefaultListItem>
  );
}
