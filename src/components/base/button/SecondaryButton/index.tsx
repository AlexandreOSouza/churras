import { WithChildren } from "@/types/commun";
import { Button, ButtonProps } from "@chakra-ui/react";

export default function SecondaryButton({
  children,
  ...props
}: ButtonProps & WithChildren) {
  return (
    <Button
      background={"churras.dark_gray"}
      color={"churras.white"}
      fontSize={"18px"}
      fontWeight={"bold"}
      borderRadius={"18px"}
      border={"none"}
      _hover={{
        bg: "churras.dark_gray",
        filter: "brightness(0.7)",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
