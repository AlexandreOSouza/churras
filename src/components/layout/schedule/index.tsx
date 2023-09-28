import Card from "@/components/card";
import { Churras } from "./types";
import { Grid, GridItem } from "@chakra-ui/react";

type Props = {
  churras: Array<Churras>;
};

export default function Schedule({ churras }: Props) {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {churras.map((ch: Churras, idx: number) => (
        <GridItem key={idx}>
          <Card churras={ch}></Card>
        </GridItem>
      ))}
    </Grid>
  );
}
