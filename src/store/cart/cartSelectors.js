import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectTotalItems = createSelector([selectCartItems], (cart) =>
  cart.reduce((acc, currentItem) => {
    acc += currentItem.quantity;
    return acc;
  }, 0)
);

export const selectTotalPrice = createSelector([selectCartItems], (cart) =>
  cart.reduce((acc, item) => {
    acc += item.price * item.quantity;
    return acc;
  }, 0)
);
