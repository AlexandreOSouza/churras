import { Button, Flex } from "@chakra-ui/react";
import InputText from "@/components/base/input/InputText";
import schema from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
} from "react";
import { LoginFormRefType, LoginFormValues, LoginProps } from "./types";

const Login: ForwardRefRenderFunction<LoginFormRefType, LoginProps> = (
  { onSubmit },
  ref,
) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    setError,
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useImperativeHandle(ref, () => ({
    setError,
  }));

  return (
    <Flex
      as={"form"}
      onSubmit={handleSubmit(onSubmit)}
      flexDirection={"column"}
      rowGap={4}
      width={"300px"}
    >
      <InputText
        type="email"
        label="Login"
        name="email"
        control={control}
        placeholder={"E-mail"}
      />
      <InputText
        type="password"
        label="Senha"
        name="password"
        placeholder="Senha"
        control={control}
      />
      <Button mt={8} colorScheme="brand" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </Flex>
  );
};

export default forwardRef(Login);
