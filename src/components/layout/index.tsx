import { Flex } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";
import { WithChildren } from "@/types/commun";
import { useRouter } from "next/router";

export default function Layout({ children }: WithChildren) {
  const router = useRouter();
  const color =
    router.pathname === "/" ? "churras.primary_yellow" : "churras.white";
  return (
    <Flex
      height={"100vh"}
      width={"100%"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      background={color}
    >
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Header />
        <Flex maxWidth={"1920px"} mt={"-50px"} mb={"50px"}>
          {children}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
