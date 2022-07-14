import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import { getCategories } from "../../store/categories/categoriesSelectors";
import { CategoryContainer, CategoryTitle } from "./Category.styles.js";

export const Category = () => {
  const products = useSelector(getCategories);
  const { category } = useParams();
  return (
    <div>
      <CategoryTitle>{category}</CategoryTitle>
      {products[category] === undefined ? (
        "charging"
      ) : (
        <CategoryContainer>
          {products[category].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CategoryContainer>
      )}
    </div>
  );
};
