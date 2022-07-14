import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchCategoriesMap } from "../../utils/firebase";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import { Category } from "../category/Category";
import { setCategories } from "../../store/categories/categoriesActions";
import { useEffect } from "react";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Add initial data
    // addCollectionAndDocuments("categories", SHOP_DATA);

    const fetchInitialData = async () => {
      const categoriesMap = await fetchCategoriesMap();
      dispatch(setCategories(categoriesMap));
    };
    fetchInitialData();

    return () => {};
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
