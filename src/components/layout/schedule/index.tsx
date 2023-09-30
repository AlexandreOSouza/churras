import Card from "@/components/card";
import { Churras } from "./types";
import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import AddButton from "@/components/base/button/AddButton";
import CreateChurrasModal from "@/components/base/modal/CreateChurrasModal";
import { useRouter } from "next/router";
import useChurras from "@/hooks/useChurras";
import { useEffect, useState } from "react";
import { auth } from "@/config/firebase";

export default function Schedule() {
  const router = useRouter();
  const createChurrasDisclosure = useDisclosure();

  const [churras, setChurras] = useState<Array<Churras>>([]);
  const { listChurras } = useChurras();

  const handleDetail = (id: string) => {
    router.push(`/detail/${id}`);
  };

  const updateChurras = () => {
    listChurras(auth.currentUser?.uid as string).then((churras) =>
      setChurras(churras),
    );
  };

  const handleClose = () => {
    updateChurras();
    createChurrasDisclosure.onClose();
  };

  useEffect(() => {
    updateChurras();
  }, [auth.currentUser]);

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
        onClose={handleClose}
      />
    </>
  );
}
