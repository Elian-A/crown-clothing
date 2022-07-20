import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartActions";
import { selectCartItems } from "../../store/cart/cartSelectors";

import Button, { BUTTON_TYPE } from "../button/Button";
import {
  Footer,
  Name,
  ProductCardContainer,
  Price,
} from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addToCartHandler = () => dispatch(addToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE.inverted} onClick={addToCartHandler}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
