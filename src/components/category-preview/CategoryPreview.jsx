import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";

import "./CategoryPreview.scss";

const CategoryPreview = ({ products, title }) => {
  const navigation = useNavigate();
  const navigateToCheckout = () => {
    navigation(`/shop/${title}`);
  };
  return (
    <div key={title} className="category-preview-container">
      <h2 className="title" to={`/shop/${title}`} onClick={navigateToCheckout}>
        {title.toUpperCase()}
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
