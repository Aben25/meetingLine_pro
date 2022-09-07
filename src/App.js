import logo from './logo.svg';
import './App.css';
import { AuthenticatedApp } from "./components/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
import { useAuth } from "./hooks/useAuth";
import { db } from './services/firebase';
import { onSnapshot, collection } from "firebase/firestore";
import { useContext, useEffect, useState, createContext } from "react";

export const MeetingContext = createContext();
function App() {
const [meeting,setMeeting] =  useState([]);

useEffect(() => {
  
  const unsubscribe = onSnapshot(collection(db, "chat-rooms"), (snapshot) =>
  setMeeting(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
);
return unsubscribe;
}, []);




const { user } = useAuth();

return (
  <div className="container">
    <h1>💬 MeetingLine</h1>

    {user ? (
      <MeetingContext.Provider value={{ meeting, user }}>
        <AuthenticatedApp />
      </MeetingContext.Provider>
    ) : (
      <UnauthenticatedApp />
    )}
  </div>
);
}

export default App;
