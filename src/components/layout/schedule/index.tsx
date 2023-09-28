import Card from "@/components/card";
import { Churras } from "./types";
import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import AddButton from "@/components/base/button/AddButton";
import CreateChurrasModal from "@/components/base/modal/CreateChurrasModal";
import { useRouter } from "next/router";

type Props = {
  churras: Array<Churras>;
};

export default function Schedule({ churras }: Props) {
  const router = useRouter();
  const createChurrasDisclosure = useDisclosure();

  const handleDetail = (id: string) => {
    router.push(`/detail/${id}`);
  };
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <AddButton onClick={createChurrasDisclosure.onOpen} />
        </GridItem>
        {churras.map((ch: Churras, idx: number) => {
          return (
            ch.id && (
              <GridItem key={idx} onClick={() => handleDetail(ch.id!)}>
                <Card churras={ch}></Card>
              </GridItem>
            )
          );
        })}
      </Grid>
      <CreateChurrasModal
        isOpen={createChurrasDisclosure.isOpen}
        onClose={createChurrasDisclosure.onClose}
      />
    </>
  );
}
