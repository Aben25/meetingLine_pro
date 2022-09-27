import logo from './logo.svg';
import './App.css';
import { AuthenticatedApp } from "./components/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
import { useAuth } from "./hooks/useAuth";
import { db } from './services/firebase';
import { onSnapshot, collection } from "firebase/firestore";
import { useContext, useEffect, useState, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  const { user } = useAuth();


return (
  <div className="container">
    <a href="/">
      {" "}
      <img className='w-56' src="/white h.png" alt="logo" />{" "}
    </a>

    {user ? (
        <AuthenticatedApp />
    ) : (
      <UnauthenticatedApp />
      
    )}
  </div>
);
}

export default App;
