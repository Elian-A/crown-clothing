import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchCategories } from "../../utils/firebase";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import { Category } from "../category/Category";
import { setCategories } from "../../store/categories/categoriesActions";
import { useEffect } from "react";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchInitialData = async () => {
      const categories = await fetchCategories();
      dispatch(setCategories(categories));
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
