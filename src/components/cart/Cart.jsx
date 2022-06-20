import { useContext, useState } from "react";
import { ReactComponent as CartIcon } from "../../assets/cartIcon.svg";
import { CartContext } from "../../context/Cart";

import CartDropdown from "../cart-dropdown/CartDropdown";

import "./Cart.scss";

const Cart = () => {
  const [dropdownView, setDropdownView] = useState(false);
  const { totalItems } = useContext(CartContext);

  const toggleView = () => setDropdownView(!dropdownView);

  return (
    <div className="cart-icon-container" onClick={toggleView}>
      <CartIcon className="shopping-icon" />
      <span className="item-count">{totalItems()}</span>
      {dropdownView && <CartDropdown />}
    </div>
  );
};

export default Cart;
