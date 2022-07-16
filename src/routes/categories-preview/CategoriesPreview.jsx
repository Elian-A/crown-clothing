import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { categoriesMap } from "../../store/categories/categoriesSelectors";
const CategoriesPreview = () => {
  const products = useSelector(categoriesMap);
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
