import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./CategoryPreview.styles";

const CategoryPreview = ({ products, title }) => {
  const navigation = useNavigate();
  const navigateToCheckout = () => {
    navigation(`/shop/${title}`);
  };
  return (
    <CategoryPreviewContainer key={title}>
      <Title to={`/shop/${title}`} onClick={navigateToCheckout}>
        {title.toUpperCase()}
      </Title>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
