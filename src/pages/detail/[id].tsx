import Layout from "@/components/layout";
import { Churras } from "@/components/layout/schedule/types";
import ScheduleDetail from "@/components/layout/scheduleDetails";
import { db } from "@/config/firebase";
import { COLLECTIONS } from "@/const/collections";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const CHURRAS = {
  date: "01/12",
  description: "Niver do Gui",
  totalParticipants: 15,
  totalAmount: 280,
  participants: [
    { name: "Alice", amount: 20, paid: false },
    { name: "Beto", amount: 20, paid: false },
    { name: "Diego B.", amount: 20, paid: false },
    { name: "Diego P.", amount: 10, paid: false },
    { name: "Fernanda", amount: 20, paid: false },
    { name: "Gariel", amount: 20, paid: true },
    { name: "Leonardo", amount: 20, paid: false },
    { name: "Marcus J.", amount: 20, paid: false },
    { name: "Michele", amount: 40, paid: false },
    { name: "Paulo", amount: 10, paid: false },
    { name: "Rafael", amount: 25, paid: false },
    { name: "Ralf", amount: 20, paid: true },
  ],
};

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
