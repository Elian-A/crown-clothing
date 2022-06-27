import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/Products";
import ProductCard from "../../components/product-card/ProductCard";
import "./Category.scss";

export const Category = () => {
  const { products } = useContext(ProductsContext);
  const { category } = useParams();
  console.log(products[category]);
  return (
    <div>
      <h2 className="category-title">{category}</h2>
      {products[category] === undefined ? (
        "charging"
      ) : (
        <div className="category-container">
          {products[category].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
