import { Button, Flex, ModalBody, ModalFooter } from "@chakra-ui/react";
import BaseModal from "../BaseModal";
import PrimaryButton from "../../button/PrimaryButton";
import SecondaryButton from "../../button/SecondaryButton";

import { useState } from "react";
import DatePicker from "../../input/DatePicker";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import InputText from "../../input/InputText";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type AddFormValues = {
  desc: string;
};

export default function CreateChurrasModal({ isOpen, onClose }: Props) {
  const [date, setDate] = useState(new Date());

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<AddFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      desc: "",
    },
  });

  const handleCancel = () => {
    reset();
    onClose();
  };

  const onSubmit = (values: AddFormValues) => {
    console.log(values);
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title={"Novo Churras"}>
      <ModalBody>
        <Flex
          as={"form"}
          onSubmit={handleSubmit(onSubmit)}
          flexDirection={"column"}
          rowGap={4}
          py={4}
        >
          <DatePicker date={date} setDate={setDate} />
          <InputText
            control={control}
            name={"desc"}
            placeholder={"Descricao"}
            border={"1px solid"}
            borderColor={"churras.gray"}
            borderRadius={8}
          />
          <Flex columnGap={4}>
            <PrimaryButton type="submit">Salvar</PrimaryButton>
            <SecondaryButton onClick={handleCancel}>Cancelar</SecondaryButton>
          </Flex>
        </Flex>
      </ModalBody>
    </BaseModal>
  );
}
