import styled from "@emotion/styled";
import { Button } from "@mui/material";
export const MealsItem = ({
  deleteMealHandler,
  editHandler,
  setEdit,
  item,
}) => {
  const editHand = (id) => {
    editHandler(id);
    setEdit(true);
  };
  return (
    <StyledMealsContent>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span>${item.price}</span>

      <Button onClick={() => editHand(item._id)} variant="outlined">
        Edit
      </Button>
      <Button onClick={() => deleteMealHandler(item._id)} variant="outlined">
        Delete
      </Button>
    </StyledMealsContent>
  );
};

const StyledMealsContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  background: "white",
  width: "600px",
  marginLeft: "300px",
  padding: "10px",
  marginTop: "10px",
  span: {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "30px",
    color: "#ad5502",
  },
  h3: {
    fontWeight: "600",
    fontSize: "18px",
    // lineHeight: "27px",
    color: "#756f6f",
  },
  p: {
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: "16px",
    // lineHeight: "24px",
    color: "#635a5a",
    margin: "4px 0",
  },
}));
