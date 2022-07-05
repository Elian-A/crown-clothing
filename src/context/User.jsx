import { useState, createContext, useEffect } from "react";
import { addUserDoc, updateAuthState } from "../utils/firebase";

export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = updateAuthState((auth) => {
      if (auth) {
        addUserDoc(auth);
      }
      setUser(auth);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
