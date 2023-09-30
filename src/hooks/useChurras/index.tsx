import { Churras } from "@/components/layout/schedule/types";
import { db } from "@/config/firebase";
import { COLLECTIONS } from "@/const/collections";
import { addDoc, collection, getDocs } from "firebase/firestore";

export default function useChurras() {
  const addChurras = (newChurras: Churras) => {
    return addDoc(collection(db, COLLECTIONS.CHURRAS), newChurras);
  };

  const listChurras = async (id: string) => {
    let churras: Array<Churras> = [];
    await getDocs(collection(db, COLLECTIONS.CHURRAS)).then((snap) => {
      snap.forEach((doc) => {
        const data = doc.data() as Churras;

        console.log(data, id);
        if (data.user === id) {
          const temp = {
            id: doc.id,
            ...data,
          };

          churras.push(temp);
        }
      });
    });
    return churras;
  };

  return { addChurras, listChurras };
}
