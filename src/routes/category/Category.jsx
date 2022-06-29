import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/Products";
import ProductCard from "../../components/product-card/ProductCard";
import { CategoryContainer, CategoryTitle } from "./Category.styles.js";

export const Category = () => {
  const { products } = useContext(ProductsContext);
  const { category } = useParams();
  console.log(products[category]);
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
