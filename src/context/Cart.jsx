import { createContext, useReducer } from "react";

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

//Context
export const CartContext = createContext({
  cartItems: [],
  addToCart: null,
  decrementQuantity: null,
  deleteItem: null,
  totalItems: 0,
  totalPrice: 0,
});

const CART_ACTION_TYPES = {
  UPDATE_CART_ITEM: "UPDATE_CART_ITEM",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  const { cartItems, totalItems, totalPrice } = payload;

  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART_ITEM:
      return {
        ...state,
        cartItems,
        totalItems,
        totalPrice,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

const INITIAL_STATE = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

//Provider
export const CartProvider = ({ children }) => {
  const [{ cartItems, totalItems, totalPrice }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartReducer = (newCartItems) => {
    /* 
    update payload
    */
    const totalItems = newCartItems.reduce((acc, currentItem) => {
      acc += currentItem.quantity;
      return acc;
    }, 0);

    const totalPrice = newCartItems.reduce((acc, item) => {
      acc += item.price * item.quantity;
      return acc;
    }, 0);

    dispatch({
      type: CART_ACTION_TYPES.UPDATE_CART_ITEM,
      payload: { cartItems: newCartItems, totalItems, totalPrice },
    });
  };

  const addToCart = (itemToAdd) => {
    const newCartItems = addCartItem(cartItems, itemToAdd);
    updateCartReducer(newCartItems);
  };

  const decrementQuantity = (itemToReduce) => {
    const newCartItems = decrement(cartItems, itemToReduce);
    updateCartReducer(newCartItems);
  };

  const deleteItem = (itemToDelete) => {
    const newCartItems = cartItems.filter(
      (item) => item.id !== itemToDelete.id
    );
    updateCartReducer(newCartItems);
  };

  const value = {
    cartItems,
    addToCart,
    decrementQuantity,
    deleteItem,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children} </CartContext.Provider>;
};
