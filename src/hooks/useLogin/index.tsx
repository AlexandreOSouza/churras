import { LoginFormValues } from "@/components/forms/login/types";
import { auth } from "@/config/firebase";
import { WithChildren } from "@/types/commun";
import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  isLogin: boolean;
  handleLogout: () => void;
  handleLogin: (values: LoginFormValues) => Promise<UserCredential>;
  handleCreate: (values: LoginFormValues) => Promise<UserCredential>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: WithChildren) => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  auth.onAuthStateChanged((next) => {
    const val = Boolean(next?.uid);
    if (val !== isLogin) {
      setIsLogin(val);
      if (!val) {
        router.push("/");
      }
    }
  });

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleLogin = (values: LoginFormValues) => {
    return signInWithEmailAndPassword(auth, values.email, values.password);
  };

  const handleCreate = (values: LoginFormValues) => {
    return createUserWithEmailAndPassword(auth, values.email, values.password);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        handleLogout,
        handleLogin,
        handleCreate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("No AuthContext.Provider found when calling useAuth.");

  return context;
};
