import { WithChildren } from "@/types/commun";
import { Button, ButtonProps } from "@chakra-ui/react";

export default function PrimaryButton({
  children,
  ...props
}: ButtonProps & WithChildren) {
  return (
    <Button
      background={"churras.black"}
      color={"churras.white"}
      fontSize={"18px"}
      fontWeight={"bold"}
      borderRadius={"18px"}
      border={"none"}
      _hover={{
        bg: "churras.black",
        filter: "brightness(0.7)",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
