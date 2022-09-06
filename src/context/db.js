import { onSnapshot } from "firebase/firestore";
import React from "react";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  doc,
  getDoc,
} from "firebase/firestore";

const AuthContext = React.createContext();
const DbContext = React.createContext();

const DbProvider = (props) => {
  const [meeting, setmeeting] = React.useState([]);


//get all the meeting
    const getMeeting = async () => {
       await onSnapshot(collection(db, "chat-rooms"), (snapshot) =>
         setmeeting(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
       );   
    };
console.log('====================================');
console.log(meeting);
console.log('====================================');
  return <DbContext.Provider value={meeting} {...props} />;
};

export { AuthContext, AuthProvider };
