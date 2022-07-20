import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../store/cart/cartSelectors";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./Checkout.styles.js";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
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
      <Total>total: {cartItems && totalPrice}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
