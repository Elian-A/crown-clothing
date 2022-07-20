import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../store/cart/cartSelectors";

import CartDropdown from "../cart-dropdown/CartDropDown";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart.styles";

const Cart = () => {
  const [dropdownView, setDropdownView] = useState(false);
  const totalItems = useSelector(selectTotalItems);

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
