import { CART_ACTION_TYPES } from "./cartTypes";

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART_ITEM:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};
