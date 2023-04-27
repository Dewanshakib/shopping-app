import React, { createContext, useState } from "react";
import { app } from "../firebase/FIrebaseConfig";
import { getAuth, signInWithPopup ,signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const isLogged = result.user;
        setUser(isLogged);
        console.log(isLogged);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("log out")
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <LoginContext.Provider value={{ handleLogin, user, handleSignOut }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
