import Layout from "@/components/layout";
import { Churras } from "@/components/layout/schedule/types";
import ScheduleDetail from "@/components/layout/scheduleDetails";
import { auth, db } from "@/config/firebase";
import { COLLECTIONS } from "@/const/collections";
import useChurras from "@/hooks/useChurras";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail({
  churras,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [currChurras, setCurrChurras] = useState(churras);
  const { getChurrasById } = useChurras();
  const router = useRouter();
  useEffect(() => {
    if (!auth.currentUser?.uid) {
      router.push("/");
    }
  }, [router]);
  const handleUpdate = async () => {
    if (churras.id) {
      const updatedChurras = await getChurrasById(churras.id);
      if (updatedChurras) {
        setCurrChurras(updatedChurras);
      }
    }
  };

  return (
    <Layout>
      {auth.currentUser?.uid && (
        <ScheduleDetail churras={currChurras} onUpdate={handleUpdate} />
      )}
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
