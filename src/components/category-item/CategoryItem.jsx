import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  CategoryContainer,
} from "./CategoryItem.styles.js";

const CategoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate();
  const redirectToCategory = () => navigate(`shop/${title}`);
  return (
    <CategoryContainer onClick={redirectToCategory}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
};

export default CategoryItem;
