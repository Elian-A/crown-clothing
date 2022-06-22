import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import { CartContext } from "../../context/Cart";

import "./Checkout.scss";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block">Remove</span>
      </div>
      <div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
      <div className="total">total: {cartItems && totalPrice()}</div>
    </div>
  );
};

export default Checkout;
