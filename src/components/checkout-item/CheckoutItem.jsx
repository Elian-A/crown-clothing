import { useContext } from "react";
import { CartContext } from "../../context/Cart";
import {
  CheckoutItemContainer,
  Quantity,
  ImageContainer,
  RemoveButton,
  Name,
  Price,
} from "./CheckoutItem.styles.js";
const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const { decrementQuantity, addToCart, deleteItem } = useContext(CartContext);
  const decrementItemHandler = () => decrementQuantity(item);
  const incrementItemHandler = () => addToCart(item);
  const deleteItemHandler = () => deleteItem(item);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <span className="arrow" onClick={decrementItemHandler}>
          {"<"}
        </span>
        <span className="value">{quantity} </span>
        <span className="arrow" onClick={incrementItemHandler}>
          {">"}
        </span>
      </Quantity>
      <Price>{price} </Price>
      <RemoveButton onClick={deleteItemHandler}>X</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
