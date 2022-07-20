import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const categoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((acc, category) => {
    const { items, title } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
