import { useContext } from "react";
import { ProductsContext } from "../../context/Products";

import ProductCard from "../../components/product-card/ProductCard";

import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products &&
        Object.keys(products).map((categoryName) => {
          const categoryProducts = products[categoryName];
          return (
            <div key={categoryName}>
              <h2>{categoryName}</h2>
              <div className="products-container">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Shop;
