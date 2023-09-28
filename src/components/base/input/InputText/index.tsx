import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { Control, useController } from "react-hook-form";

type Props = {
  label?: string;
  name: string;
  control: Control<any>;
  helperText?: string;
  mask?: string;
} & InputProps;

export default function InputText({
  label,
  name,
  control,
  helperText,
  mask,
  type,
  ...rest
}: Props) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <FormControl isInvalid={invalid}>
      {label && (
        <FormLabel htmlFor={name} fontSize={"21px"} fontWeight={"bold"}>
          {label}
        </FormLabel>
      )}

      <Input
        id={name}
        ref={ref}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={invalid}
        type={type}
        background={"churras.white"}
        color={"churras.black_08"}
        fontSize={"18px"}
        height={"50px"}
        border={"1px solid"}
        borderColor={"churras.gray"}
        borderRadius={8}
        _placeholder={{
          color: "churras.black_08",
          fontSize: "18px",
          fontWeight: 300,
        }}
        {...rest}
      />

      {invalid ? (
        <FormErrorMessage>{error?.message}</FormErrorMessage>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}
