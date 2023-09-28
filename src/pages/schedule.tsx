import Layout from "@/components/layout";
import Schedule from "@/components/layout/schedule";
import { Flex } from "@chakra-ui/react";

const CHURRAS = [
  {
    date: "01/12",
    description: "Níver do Gui",
    participants: 15,
    totalAmount: 280,
  },
  {
    date: "23/12",
    description: "Natal",
    participants: 28,
    totalAmount: 400,
  },
  {
    date: "06/01",
    description: "Sem motivo",
    participants: 12,
    totalAmount: 140,
  },
];

export default function List() {
  return (
    <Layout>
      <Flex>
        <Schedule churras={CHURRAS} />
      </Flex>
    </Layout>
  );
}
