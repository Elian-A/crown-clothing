import {
  BackgroundImage,
  Body,
  CategoryContainer,
} from "./CategoryItem.styles.js";

const CategoryItem = ({ title, imageUrl }) => (
  <CategoryContainer>
    <BackgroundImage imageUrl={imageUrl} />
    <Body>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </Body>
  </CategoryContainer>
);

export default CategoryItem;
