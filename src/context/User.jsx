import { createContext, useEffect, useReducer } from "react";
import { addUserDoc, updateAuthState } from "../utils/firebase";

export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  console.log("adsfadf", state, action);

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      throw new Error(`Unhandle action type: ${type}`);
  }
};

const INITIAL_USER_STATE = {
  user: null,
};

export const UserProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useReducer(userReducer, INITIAL_USER_STATE);

  const setUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

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
