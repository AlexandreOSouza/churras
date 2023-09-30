import { Churras, Participant } from "@/components/layout/schedule/types";
import { db } from "@/config/firebase";
import { COLLECTIONS } from "@/const/collections";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export default function useChurras() {
  const addChurras = (newChurras: Churras) => {
    return addDoc(collection(db, COLLECTIONS.CHURRAS), newChurras);
  };

  const listChurras = async (id: string) => {
    let churras: Array<Churras> = [];
    await getDocs(collection(db, COLLECTIONS.CHURRAS)).then((snap) => {
      snap.forEach((doc) => {
        const data = doc.data() as Churras;

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

  const addParticipant = async (churras: Churras, newPart: Participant) => {
    const participants = churras.participants;
    participants?.push(newPart);
    const id = churras.id!;
    const churrasRef = doc(db, COLLECTIONS.CHURRAS, id);

    const totalAmount = participants!.reduce((accumulator, currentValue) => {
      if (currentValue.amount !== undefined) {
        return accumulator + currentValue.amount;
      }
      return accumulator;
    }, 0);

    await updateDoc(churrasRef, {
      participants,
      totalParticipants: participants?.length,
      totalAmount,
    });
  };

  const getChurrasById = async (id: string) => {
    const docRef = doc(db, COLLECTIONS.CHURRAS, id);
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      const churras = snap.data() as Churras;
      churras.id = snap.id;
      return churras;
    }
    return undefined;
  };

  const updateParticipant = async (
    churras: Churras,
    participants: Array<Participant>,
  ) => {
    if (churras.id) {
      const churrasRef = doc(db, COLLECTIONS.CHURRAS, churras.id);

      const totalAmount = participants.reduce((accumulator, currentValue) => {
        if (currentValue.amount !== undefined) {
          return accumulator + currentValue.amount;
        }
        return accumulator;
      }, 0);

      await updateDoc(churrasRef, {
        participants,
        totalParticipants: participants?.length,
        totalAmount,
      });
    }
  };

  return {
    addChurras,
    listChurras,
    addParticipant,
    getChurrasById,
    updateParticipant,
  };
}
