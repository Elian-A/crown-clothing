import { useState } from "react";
import { ReactComponent as CartIcon } from "../../assets/cartIcon.svg";

import CartDropdown from "../Cart-dropdown/CartDropdown";

import "./Cart.scss";

const Cart = () => {
  const [dropdownView, setDropdownView] = useState(false);
  const toggleView = () => setDropdownView(!dropdownView);
  return (
    <div className="cart-icon-container" onClick={toggleView}>
      <CartIcon className="shopping-icon" />
      <span className="item-count">0</span>
      {dropdownView && <CartDropdown />}
    </div>
  );
};

export default Cart;
