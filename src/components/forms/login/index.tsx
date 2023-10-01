import { Button, Flex, Text } from "@chakra-ui/react";
import InputText from "@/components/base/input/InputText";
import schema from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { LoginFormRefType, LoginFormValues, LoginProps } from "./types";
import PrimaryButton from "@/components/base/button/PrimaryButton";
import SecondaryButton from "@/components/base/button/SecondaryButton";

const Login: ForwardRefRenderFunction<LoginFormRefType, LoginProps> = (
  { onSubmit, isLoading, onCreate },
  ref,
) => {
  const [isLogin, setIsLogin] = useState(true);
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
      onSubmit={handleSubmit(isLogin ? onSubmit : onCreate)}
      flexDirection={"column"}
      width={"100%"}
      rowGap={4}
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
      {isLogin ? (
        <PrimaryButton
          isLoading={isSubmitting || isLoading}
          type="submit"
          height={"50px"}
        >
          Entrar
        </PrimaryButton>
      ) : (
        <SecondaryButton
          isLoading={isSubmitting || isLoading}
          type="submit"
          height={"50px"}
        >
          Cadastre-se
        </SecondaryButton>
      )}
      <Flex columnGap={2}>
        <Text color={"churras.black"}>Nao tem login?</Text>
        <Text
          cursor={"pointer"}
          color={"blue"}
          textDecoration={"underline"}
          onClick={() => setIsLogin(false)}
        >
          Cadastre-se
        </Text>
      </Flex>
    </Flex>
  );
};

export default forwardRef(Login);
