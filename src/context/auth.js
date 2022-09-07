import React from "react";
import { loginWithGoogle } from "../services/firebase";
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

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const [user, setUser] = React.useState(null);
  useEffect(() => {
    const usr = JSON.parse(localStorage.getItem("user"));
    setUser(usr);
  }, []);

  const value = { user, login, logout };

  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };
