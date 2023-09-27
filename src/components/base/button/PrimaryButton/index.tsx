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
      {...props}
    >
      {children}
    </Button>
  );
}
