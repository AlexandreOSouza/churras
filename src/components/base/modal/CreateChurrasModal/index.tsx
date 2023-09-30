import { Flex, ModalBody } from "@chakra-ui/react";
import BaseModal from "../BaseModal";
import PrimaryButton from "../../button/PrimaryButton";
import SecondaryButton from "../../button/SecondaryButton";

import { useState } from "react";
import DatePicker from "../../input/DatePicker";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import InputText from "../../input/InputText";
import { auth } from "@/config/firebase";
import { Churras } from "@/components/layout/schedule/types";
import useChurras from "@/hooks/useChurras";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type AddFormValues = {
  desc: string;
};

export default function CreateChurrasModal({ isOpen, onClose }: Props) {
  const [date, setDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const { addChurras } = useChurras();

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

  const onSubmit = async (values: AddFormValues) => {
    setIsLoading(true);
    const newChurras: Churras = {
      description: values.desc,
      totalParticipants: 0,
      totalAmount: 0,
      date: date.toLocaleDateString(),
      user: auth.currentUser?.uid,
      participants: [],
    };
    addChurras(newChurras).finally(() => {
      setIsLoading(false);
      handleCancel();
    });
  };

  return (
    <BaseModal isOpen={isOpen} onClose={handleCancel} title={"Novo Churras"}>
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
            <PrimaryButton type="submit" isLoading={isLoading}>
              Salvar
            </PrimaryButton>
            <SecondaryButton onClick={handleCancel}>Cancelar</SecondaryButton>
          </Flex>
        </Flex>
      </ModalBody>
    </BaseModal>
  );
}
