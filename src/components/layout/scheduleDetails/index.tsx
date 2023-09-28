import { Flex, List, Text, useDisclosure } from "@chakra-ui/react";
import { Churras, Participant } from "../schedule/types";
import { GoPeople } from "react-icons/go";
import { HiCurrencyDollar } from "react-icons/hi";
import ListItem from "@/components/base/list/ListItem";
import { IoAddOutline } from "react-icons/io5";
import AddParticipantModal, {
  AddFormValues,
} from "@/components/base/modal/AddParticipantModal";

type Props = {
  churras: Churras;
};
export default function ScheduleDetail({ churras }: Props) {
  const AddModalDisclosure = useDisclosure();
  const handleSubmit = (values: AddFormValues) => {
    console.log(values);
  };

  return (
    <>
      <Flex
        background={"churras.white"}
        boxShadow={"0px 0px 16px 0px rgba(0, 0, 0, 0.06)"}
        borderRadius={2}
        width={"588px"}
        flexDirection={"column"}
        alignItems={"center"}
        color={"churras.black"}
        py={8}
        px={8}
      >
        <Flex width={"100%"} justifyContent={"space-between"}>
          <Text fontSize={"28px"} fontWeight={"800"}>
            {churras.date}
          </Text>
          <Flex
            color={"churras.primary_yellow"}
            alignItems={"center"}
            columnGap={2}
          >
            <GoPeople size={"18px"} />
            <Text fontSize={"21px"} fontWeight={"500"} color={"churras.black"}>
              {churras.totalParticipants}
            </Text>
          </Flex>
        </Flex>
        <Flex width={"100%"} justifyContent={"space-between"}>
          <Text fontSize={"36px"} fontWeight={"700"}>
            {churras.description}
          </Text>
          <Flex
            color={"churras.primary_yellow"}
            alignItems={"center"}
            columnGap={2}
          >
            <HiCurrencyDollar size={"18px"} />
            <Text fontSize={"21px"} fontWeight={"500"} color={"churras.black"}>
              {churras.totalAmount}
            </Text>
          </Flex>
        </Flex>
        <Flex width={"100%"}>
          <Flex
            alignItems={"center"}
            columnGap={2}
            cursor={"pointer"}
            onClick={AddModalDisclosure.onOpen}
          >
            <Text fontSize={"18px"} fontWeight={"500"}>
              Participantes
            </Text>
            <Flex
              height={"24px"}
              width={"24px"}
              borderRadius={"full"}
              justifyContent={"center"}
              alignItems={"center"}
              background={"churras.primary_yellow"}
              color={"churras.white"}
            >
              <IoAddOutline size={"18px"} />
            </Flex>
          </Flex>
        </Flex>

        <List width={"100%"}>
          {churras.participants &&
            churras.participants.map((p: Participant, idx: number) => (
              <ListItem key={idx} {...p} />
            ))}
        </List>
      </Flex>
      <AddParticipantModal
        isOpen={AddModalDisclosure.isOpen}
        onClose={AddModalDisclosure.onClose}
        onSubmit={handleSubmit}
      />
    </>
  );
}
