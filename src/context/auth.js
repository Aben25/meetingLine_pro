import React from "react";
import { loginWithGoogle, loginwemp } from "../services/firebase";
import { useContext, useEffect, useState, createContext } from "react";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const login = async () => {
    const c_user = await loginWithGoogle();


    if (!c_user) {
      // TODO: Handle failed login
    }
    localStorage.setItem("user", JSON.stringify(c_user));
    setUser(c_user);
  };

   const loginw = async (email, password) => {
     const w_user = await loginwemp(email, password);

     if (!w_user) {
       // TODO: Handle failed login
     }
     localStorage.setItem("user", JSON.stringify(w_user));

     setUser(w_user);
   };

  

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const [user, setUser] = React.useState(null);
  useEffect(() => {
    const usr = JSON.parse(localStorage.getItem("user"));
    setUser(usr);
  }, []);

  const value = { user, login, logout, loginw };

  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };
