import { Flex } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";
import { WithChildren } from "@/types/commun";

export default function Layout({ children }: WithChildren) {
  return (
    <Flex
      height={"100vh"}
      width={"100%"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Header />
        <Flex maxWidth={"1920px"} mt={"-50px"}>
          {children}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
