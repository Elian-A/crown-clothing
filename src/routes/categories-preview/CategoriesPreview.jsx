import { useContext } from "react";
import { ProductsContext } from "../../context/Products";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
const CategoriesPreview = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products &&
        Object.keys(products).map((categoryName) => {
          const product = products[categoryName];
          return (
            <CategoryPreview
              key={categoryName}
              products={product}
              title={categoryName}
            />
          );
        })}
    </div>
  );
};

export default CategoriesPreview;
