import { useContext, useState } from "react";
import { CartContext } from "../../context/Cart";

import CartDropdown from "../cart-dropdown/CartDropdown";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart.styles";

const Cart = () => {
  const [dropdownView, setDropdownView] = useState(false);
  const { totalItems } = useContext(CartContext);

  const toggleView = () => setDropdownView(!dropdownView);

  return (
    <CartIconContainer onClick={toggleView}>
      <ShoppingIcon />
      <ItemCount>{totalItems}</ItemCount>
      {dropdownView && <CartDropdown />}
    </CartIconContainer>
  );
};

export default Cart;
