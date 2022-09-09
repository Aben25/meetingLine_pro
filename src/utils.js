import {
  collection,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./services/firebase";

// export const handleNew = async () => {

//   const collectionRef = collection(db, "rooms");
//   const payload = { name, value };
//   const docRef = await addDoc(collectionRef, payload);
//
// };

export const joindList = async (id, name) => {
  const docRef = doc(db, "chat-rooms", id);
  const payload = { name: name };
  await updateDoc(docRef, { joindList: arrayUnion(payload) });
};

export const queueList = async (id, name) => {
  const docRef = doc(db, "chat-rooms", id);
  const payload = { name: name };
  await updateDoc(docRef, { queueList: arrayUnion(payload) });
  await updateDoc(docRef, { joindList: arrayRemove(payload) });
};
export const removequeues = async (id, name) => {
  const docRef = doc(db, "chat-rooms", id);
  const payload = { name: name };
  await updateDoc(docRef, { joindList: arrayUnion(payload) });
  await updateDoc(docRef, { queueList: arrayRemove(payload) });
};

export const removeJoindList = async (id, name) => {
  const docRef = doc(db, "chat-rooms", id);
  const payload = { name: name };
  await updateDoc(docRef, { joindList: arrayRemove(payload) });
  await updateDoc(docRef, { queueList: arrayRemove(payload) });
};
export const removeperson = async (id, name) => {
  const docRef = doc(db, "chat-rooms", id);
  const payload = { name: name };
  await updateDoc(docRef, { queueList: arrayRemove(payload) });
  await updateDoc(docRef, { joindList: arrayUnion(payload) });
};

export const addmeeting = async (title, number, admin) => {
  const docRef = collection(db, "chat-rooms");
  const payload = { title: title, number: number, admin: admin, queueList: [], joindList: [], friends: [] };
    await addDoc(docRef, payload);

  };

export const removeMeeting = async (id) => {
  const docRef = doc(db, "chat-rooms", id);
  await deleteDoc(docRef);
};