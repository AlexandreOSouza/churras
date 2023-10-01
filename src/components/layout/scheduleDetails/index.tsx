import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  List,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Churras, Participant } from "../schedule/types";
import { GoPeople } from "react-icons/go";
import { HiCurrencyDollar } from "react-icons/hi";
import ListItem from "@/components/base/list/ListItem";
import { IoAddOutline } from "react-icons/io5";
import AddParticipantModal, {
  AddFormValues,
} from "@/components/base/modal/AddParticipantModal";
import { AiOutlineRight } from "react-icons/ai";
import useChurras from "@/hooks/useChurras";

type Props = {
  churras: Churras;
  onUpdate: () => void;
};

export default function ScheduleDetail({ churras, onUpdate }: Props) {
  const addModalDisclosure = useDisclosure();
  const { addParticipant, updateParticipant } = useChurras();

  const handleDelete = async (idx: number) => {
    churras.participants?.splice(idx, 1);
    await updateParticipant(churras, churras.participants);
    onUpdate();
  };

  const handleSubmit = async (values: AddFormValues) => {
    if (churras.id) {
      const newParticipant: Participant = {
        name: values.name,
        amount: values.amount,
        paid: false,
      };
      await addParticipant(churras, newParticipant);
      onUpdate();
      addModalDisclosure.onClose();
    }
  };

  const handleSelect = async (idx: number) => {
    if (churras.participants) {
      churras.participants[idx].paid = !churras.participants[idx].paid;
      updateParticipant(churras, churras.participants);
      onUpdate();
    }
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
        <Flex width={"100%"}>
          <Breadcrumb
            spacing="8px"
            separator={<AiOutlineRight color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/schedule">Agenda</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Detalhe</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
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
            onClick={addModalDisclosure.onOpen}
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
              <ListItem
                key={idx}
                onSelect={() => handleSelect(idx)}
                onDelete={() => handleDelete(idx)}
                {...p}
              />
            ))}
        </List>
      </Flex>
      <AddParticipantModal
        isOpen={addModalDisclosure.isOpen}
        onClose={addModalDisclosure.onClose}
        onSubmit={handleSubmit}
      />
    </>
  );
}
