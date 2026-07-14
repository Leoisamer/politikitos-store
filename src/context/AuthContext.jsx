import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";

import { auth } from "../firebase/config";


const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
      setLoading(false);
    });

    return unsubscribe;

  }, []);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout
      }}
    >

      {!loading && children}

    </AuthContext.Provider>

  );

}

export const useAuth = () => useContext(AuthContext);