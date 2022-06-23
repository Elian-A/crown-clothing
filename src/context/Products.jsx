import { createContext, useState, useEffect } from "react";

import { fetchCategoriesMap } from "../utils/firebase.js";

export const ProductsContext = createContext({
  products: [],
  setProducts: null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const value = { products, setProducts };

  useEffect(() => {
    // Add initial data
    // addCollectionAndDocuments("categories", SHOP_DATA);

    const fetchInitialData = async () => {
      const categoriesMap = await fetchCategoriesMap();
      setProducts(categoriesMap);
    };
    fetchInitialData();

    return () => {};
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
