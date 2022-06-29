import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import { CartContext } from "../../context/Cart";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./Checkout.styles.js";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>
      <div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
      <Total>total: {cartItems && totalPrice()}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
