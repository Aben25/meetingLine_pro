import { initializeApp } from "firebase/app";
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

const firebaseConfig = {
  apiKey: "AIzaSyA4qyiBmtX2QdtfQPJky_x4arg83-NoY2g",
  authDomain: "meet-941d4.firebaseapp.com",
  projectId: "meet-941d4",
  storageBucket: "meet-941d4.appspot.com",
  messagingSenderId: "172469628091",
  appId: "1:172469628091:web:10c36cb3dd98da0cc68d9e",
  measurementId: "G-422DPM8BZ9",
  // TODO: Add your Firebase configuration here
};

const app = initializeApp(firebaseConfig);

import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

const db = getFirestore(app);

// Fetch the required data using the get() method
const Fetchdata = async () => {
  const docRef = doc(db);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
};

function getMessages(roomId, callback) {
  return onSnapshot(
    query(
      collection(db, "chat-rooms", roomId, "messages"),
      orderBy("timestamp", "asc")
    ),
    (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(messages);
    }
  );
}

// ...
async function sendMessage(roomId, user, text) {
  try {
    await addDoc(collection(db, "chat-rooms", roomId, "messages"), {
      uid: user.uid,
      displayName: user.displayName,
      text: text.trim(),
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
}

async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const { user } = await signInWithPopup(auth, provider);

    return { uid: user.uid, displayName: user.displayName, photoURL: user.photoURL };
  } catch (error) {
    if (error.code !== "auth/cancelled-popup-request") {
      console.error(error);
    }

    return null;
  }
}

// register
// async function register(email, password) {
//   try {
//     const auth = getAuth();
//     const { user } = await createUserWithEmailAndPassword(auth, email, password);
//     return { uid: user.uid, displayName: user.displayName, photoURL: user.photoURL };
//   } catch (error) { return null; } finally { }
// }

async function register(name, email, password) {
  try {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName: name });
    return { uid: user.uid, displayName: name, photoURL: user.photoURL };
  } catch (error) { return null; } finally { }
}

async function loginwemp(email, password) {
    const auth = getAuth();
  try {
    console.log(email, password);
    const { user } = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
  } catch (error) {
    if (error.code !== "auth/cancelled-popup-request") {
      console.error(error);
    }

    return null;
  }
}

//get list of user

export {
  loginWithGoogle,
  sendMessage,
  getMessages,
  Fetchdata,
  db,
  register,
  loginwemp,
};
