import { memo } from "react";
import { styled } from "@mui/system";
import { MealItemForm } from "./mealItemForm/MealItemForm";
export const MealItem = ({ title, description, price, id }) => {
  return (
    <StyledItem>
      <StyledItemInfo>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{description}</StyledText>
        <span>${price}</span>
      </StyledItemInfo>
      <MealItemForm id={id} title={title} price={price} />
    </StyledItem>
  );
};
memo(MealItem);
const StyledItem = styled("li")(() => ({
  listStyle: "none",
  display: "flex",
  marginBottom: "24px",
  justifyContent: "space-between",
  borderBottom: "1px solid #d6d6d6",
  ":last-child": {
    border: "none",
    marginBottom: "0",
  },
}));

const StyledItemInfo = styled("div")(() => ({
  marginBottom: "20px",
  span: {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "30px",
    color: "#ad5502",
  },
}));

const StyledTitle = styled("h4")(() => ({
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "27px",
  color: "#222222",
}));

const StyledText = styled("p")(() => ({
  fontStyle: "italic",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#222222",
  margin: "4px 0",
}));
