import { Flex, ModalBody } from "@chakra-ui/react";
import BaseModal from "../BaseModal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "./schema";
import InputText from "../../input/InputText";
import PrimaryButton from "../../button/PrimaryButton";
import SecondaryButton from "../../button/SecondaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: AddFormValues) => void;
};

export type AddFormValues = {
  name: string;
  amount: number;
};

export default function AddParticipantModal({
  isOpen,
  onClose,
  onSubmit,
}: Props) {
  const { handleSubmit, control, reset } = useForm<AddFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const handleCancel = () => {
    reset();
    onClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={"Adicionar Participantes"}
    >
      <ModalBody>
        <Flex
          as={"form"}
          onSubmit={handleSubmit(onSubmit)}
          flexDirection={"column"}
          rowGap={4}
          pb={4}
        >
          <InputText
            control={control}
            name="name"
            label="Nome"
            placeholder="Nome"
          />
          <InputText
            control={control}
            name="amount"
            label="A pagar"
            placeholder="A pagar"
            type={"number"}
          />
          <Flex justifyContent={"flex-end"} columnGap={4}>
            <PrimaryButton type={"submit"}>Adicionar</PrimaryButton>
            <SecondaryButton onClick={handleCancel}>Cancelar</SecondaryButton>
          </Flex>
        </Flex>
      </ModalBody>
    </BaseModal>
  );
}
