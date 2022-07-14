import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { getCategories } from "../../store/categories/categoriesSelectors";
const CategoriesPreview = () => {
  const products = useSelector(getCategories);
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
