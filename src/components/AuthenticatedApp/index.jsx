import { Landing } from '../Landing';
import { ChatRoom } from '../ChatRoom';
import Account from '../Account';
import Form from "../Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState, createContext } from "react";
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../services/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import People from '../people';
export const MeetingContext = createContext();
function AuthenticatedApp() {
  const [meeting, setMeeting] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "chat-rooms"), (snapshot) =>
      setMeeting(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsubscribe;
  }, []);

    return (
      <MeetingContext.Provider value={{ meeting, user }}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/:title" element={<ChatRoom />} />
            <Route path="/profile" element={<Account />} />
            <Route path="/form" element={<Form />} />
            <Route path="/people" element={<People />} />
          </Routes>
        </Router>
      </MeetingContext.Provider>
    );
}

export { AuthenticatedApp };