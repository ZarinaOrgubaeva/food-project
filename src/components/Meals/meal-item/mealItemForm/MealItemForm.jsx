import { memo, useState } from "react";
import { styled } from "@mui/system";
import { ReactComponent as PlusIcon } from "../../../assets/icons/pluzIcon.svg";
import Button from "../../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../../store/basket/basketSlice";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
export const MealItemForm = ({ id, title, price,  }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const  isAuthorized= useSelector((state) => state.auth.isAuthorized);
  const [isModalOpen, setModalOpen] = useState(false);
  const amountChangehandler = (event) => {
    setAmount(+event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!isAuthorized) {
      setModalOpen(true);
    }
    const basketItem = {
      id,
      price,
      title,
      amount: +amount,
    };
    dispatch(addToBasket(basketItem));
  };
  return (
    <>
      <Dialog
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Not Authorized</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            In order to compelete this action, please sing in.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => navigate("/singIn")}>Go to singIn</Button>
          <Button onClick={() => setModalOpen(false)} autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>
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
        <Button type='submit'>
          <PlusIcon id="pluzIcon" />
          Add
        </Button>
      </StyledForm>
    </>
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
