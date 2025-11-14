import { db } from "../firebase/firebaseConfig.js";
import { collection, addDoc, getDocs, getDoc, updateDoc, doc } from "firebase/firestore";

const turmaCollection = collection(db, "turmas");

export async function criarTurma(dados) {
  const docRef = await addDoc(turmaCollection, dados);
  return docRef.id;
}

export async function listarTurmas() {
  const snapshot = await getDocs(turmaCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function buscarTurma(id) {
  const ref = doc(db, "turmas", id);
  const snap = await getDoc(ref);
  return { id: snap.id, ...snap.data() };
}

export async function atualizarTurma(id, turmaAtualizada) {
  const ref = doc(db, "turmas", id);
  await updateDoc(ref, turmaAtualizada);
}


