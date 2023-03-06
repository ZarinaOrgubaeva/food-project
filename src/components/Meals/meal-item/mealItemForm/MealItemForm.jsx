import { memo, useState } from "react";
import { styled } from "@mui/system";
import { ReactComponent as PlusIcon } from "../../../assets/icons/pluzIcon.svg";
import Button from "../../../UI/Button";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../../store/basket/basketSlice";
import { TextField } from "@mui/material";
export const MealItemForm = ({ id, title, price }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const amountChangehandler = (event) => {
    setAmount(+event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const basketItem = {
      id,
      price,
      title,
      amount,
    };
    dispatch(addToBasket(basketItem));
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <InputContainer>
        <label htmlFor={id}>Amount</label>
      </InputContainer>
      <InputContainer>
        <StyledTextField
          id={id}
          label=""
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          value={amount}
          onChange={amountChangehandler}
        />
      </InputContainer>
      <Button>
        <PlusIcon id="pluzIcon" />
        Add
      </Button>
    </StyledForm>
  );
};
memo(MealItemForm);
const StyledTextField = styled(TextField)(() => ({
  "&.MuiTextField-root": {
    width: "70px",
  },
  "&..MuiOutlinedInput-input": {
    padding: "5px 10px",
    fontSize: "14px",
  },
}));
const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
}));

const InputContainer = styled("div")(() => ({
  marginBottom: "12px",
  label: {
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#222222",
  },
}));


