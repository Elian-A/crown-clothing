import { USER_ACTION_TYPES } from "./userTypes";

export const setUser = (user) => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload: user,
});
