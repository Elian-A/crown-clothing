import { ReactComponent as CartIcon } from "../../assets/cartIcon.svg";

import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cart-icon-container">
      <CartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default Cart;
