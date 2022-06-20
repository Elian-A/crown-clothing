const { createContext, useState } = require("react");

export const CartContext = createContext({
  cartItems: [],
  setCartItems: null,
  addToCart: null,
  decrementQuantity: null,
  deleteItem: null,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemToAdd) => {
    const alreadyExist = cartItems.find((item) => item.id === itemToAdd.id);
    if (!alreadyExist) {
      itemToAdd["quantity"] = 0;
      console.log(itemToAdd);
      setCartItems([...cartItems, itemToAdd]);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === itemToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (itemToReduce) => {
    if (itemToReduce.quantity === 1)
      return cartItems.filter((item) => item.id !== itemToReduce.id);
    return cartItems.map((item) =>
      item.id === itemToReduce.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  };

  const deleteItem = (itemToDelete) =>
    cartItems.filter((item) => item.id !== itemToDelete.id);

  const value = {
    cartItems,
    setCartItems,
    addToCart,
    decrementQuantity,
    deleteItem,
  };

  return <CartContext.Provider value={value}>{children} </CartContext.Provider>;
};