import "./CartItem.scss";
const CartItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <div>
          <span>{`${quantity} X ${price}`}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
