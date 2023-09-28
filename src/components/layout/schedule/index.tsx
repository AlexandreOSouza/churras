import Card from "@/components/card";
import { Churras } from "./types";
import { Grid, GridItem } from "@chakra-ui/react";
import AddButton from "@/components/base/button/AddButton";

type Props = {
  churras: Array<Churras>;
};

export default function Schedule({ churras }: Props) {
  const handleAdd = () => {
    console.log("add");
  };
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem>
        <AddButton onClick={handleAdd} />
      </GridItem>
      {churras.map((ch: Churras, idx: number) => (
        <GridItem key={idx}>
          <Card churras={ch}></Card>
        </GridItem>
      ))}
    </Grid>
  );
}
