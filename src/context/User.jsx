import { useState, useEffect, createContext } from "react";
import { updateAuthState, userSignOut } from "../utils/firebase";

export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  updateAuthState((auth) => setUser(auth));

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
