import { auth } from "@/config/firebase";
import { WithChildren } from "@/types/commun";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isLogin: false,
});

export const AuthContextProvider = ({ children }: WithChildren) => {
  const [isLogin, setIsLogin] = useState(false);
  const route = useRouter();

  auth.onAuthStateChanged((next) => {
    console.log(next?.uid);
    setIsLogin(Boolean(next?.uid));
  });

  return (
    <AuthContext.Provider
      value={{
        isLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
