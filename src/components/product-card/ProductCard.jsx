import { useContext } from "react";
import { CartContext } from "../../context/Cart";
import Button, { BUTTON_TYPE } from "../button/Button";
import {
  Footer,
  Name,
  ProductCardContainer,
  Price,
} from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addToCart } = useContext(CartContext);

  const addToCartHandler = () => addToCart(product);

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
