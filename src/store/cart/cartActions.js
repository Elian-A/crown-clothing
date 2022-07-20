import { createAction } from "../../utils/createAction";
import { CART_ACTION_TYPES } from "./cartTypes";

// Helper Functions
const addCartItem = (cartItems, itemToAdd) => {
  const alreadyExist = cartItems.find((item) => item.id === itemToAdd.id);

  if (!alreadyExist) {
    itemToAdd["quantity"] = 1;
    return [...cartItems, itemToAdd];
  }

  return cartItems.map((item) =>
    item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

const decrement = (cartItems, itemToReduce) => {
  if (itemToReduce.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToReduce.id);
  }
  return cartItems.map((item) =>
    item.id === itemToReduce.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

// Actions
export const addToCart = (cartItems, itemToAdd) => {
  const newCartItems = addCartItem(cartItems, itemToAdd);
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEM, newCartItems);
};

export const decrementQuantity = (cartItems, itemToReduce) => {
  const newCartItems = decrement(cartItems, itemToReduce);
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEM, newCartItems);
};

export const deleteItem = (cartItems, itemToDelete) => {
  const newCartItems = cartItems.filter((item) => item.id !== itemToDelete.id);
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEM, newCartItems);
};
