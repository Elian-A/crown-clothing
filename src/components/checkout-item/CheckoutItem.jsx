import { useContext } from "react";
import { CartContext } from "../../context/Cart";
import "./CheckoutItem.scss";
const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const { decrementQuantity, addToCart, deleteItem } = useContext(CartContext);
  const decrementItemHandler = () => decrementQuantity(item);
  const incrementItemHandler = () => addToCart(item);
  const deleteItemHandler = () => deleteItem(item);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={decrementItemHandler}>
          {"<"}
        </span>
        <span className="value">{quantity} </span>
        <span className="arrow" onClick={incrementItemHandler}>
          {">"}
        </span>
      </div>
      <span className="price">{price} </span>
      <span className="remove-button" onClick={deleteItemHandler}>
        X
      </span>
    </div>
  );
};

export default CheckoutItem;
