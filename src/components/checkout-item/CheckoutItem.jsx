import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  addToCart,
  deleteItem,
} from "../../store/cart/cartActions.js";

import { selectCartItems } from "../../store/cart/cartSelectors";
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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const decrementItemHandler = () =>
    dispatch(decrementQuantity(cartItems, item));
  const incrementItemHandler = () => dispatch(addToCart(cartItems, item));
  const deleteItemHandler = () => dispatch(deleteItem(cartItems, item));
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
