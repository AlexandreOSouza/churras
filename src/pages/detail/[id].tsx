import Layout from "@/components/layout";
import { Churras } from "@/components/layout/schedule/types";
import ScheduleDetail from "@/components/layout/scheduleDetails";
import { db } from "@/config/firebase";
import { COLLECTIONS } from "@/const/collections";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Detail({
  churras,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <ScheduleDetail churras={churras} />
    </Layout>
  );
}

export const getServerSideProps = (async (context) => {
  if (context.params && context.params["id"]) {
    const id = context.params["id"] as string;
    const docRef = doc(db, COLLECTIONS.CHURRAS, id);
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      const churras = snap.data() as Churras;
      churras.id = snap.id;
      return { props: { churras } };
    } else {
      return { notFound: true };
    }
  } else {
    return { notFound: true };
  }
}) satisfies GetServerSideProps<{
  churras: Churras;
}>;
