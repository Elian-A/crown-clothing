import { CartItemContainer, ItemDetails } from "./CartItem.styles.js";
const CartItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <div>
          <span>{`${quantity} X ${price}`}</span>
        </div>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
