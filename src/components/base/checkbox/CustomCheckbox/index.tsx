import {
  useCheckbox,
  chakra,
  Flex,
  Box,
  CheckboxProps,
} from "@chakra-ui/react";

export default function CustomCheckbox({ ...props }: CheckboxProps) {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <chakra.label maxW="36" cursor="pointer" {...htmlProps}>
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        borderColor={
          state.isChecked ? "churras.primary_yellow" : "churras.dark_yellow"
        }
        borderRadius={"full"}
        background={state.isChecked ? "churras.primary_yellow" : ""}
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && (
          <Box w={4} h={4} bg="churras.primary_yellow" borderRadius={"full"} />
        )}
      </Flex>
    </chakra.label>
  );
}
