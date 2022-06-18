import { useState, useEffect, createContext } from "react";
import { updateAuthState, userSignOut } from "../utils/firebase";

export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  updateAuthState((auth) => {
    auth ? console.log("signed In") : console.log("signed Out");
    setUser(auth);
  });

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
