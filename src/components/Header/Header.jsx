import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../../store/basket/basketSlice";
import BasketBtn from "./Basket/HeaderBtn";
import { uiActions } from "../../store/UI/uiSlice";
import { Button } from "@mui/material";
export const Header = ({ onShowBasket }) => {
  const dispatch = useDispatch();
  let items = useSelector((state) => state.basket.items);
  const theme = useSelector((state) => state.ui.themeMode);
  const [animationClass, setAnimationClass] = useState("");
  const changeThemeHandler = () => {
    const themeMode = theme === "Light" ? "dark" : "Light";
    dispatch(uiActions.changeTheme(themeMode));
  };
  useEffect(() => {
    dispatch(getBasket());
  }, []);

  const calculateTotalAmount = () => {
    const sum = items.reduce((summa, item) => {
      return summa + item.amount;
    }, 0);
    return sum;
  };
  useEffect(() => {
    setAnimationClass("bump");
    const id = setTimeout(() => {
      setAnimationClass(" ");
    }, 300);
    return () => {
      clearTimeout(id);
    };
  }, [items]);

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketBtn
        className={animationClass}
        onClick={onShowBasket}
        count={calculateTotalAmount()}
      ></BasketBtn>
      <Button onClick={changeThemeHandler} sx={{ color: "white" }}>
        {theme === "Light" ? "Turn dark mode!" : "Turn light mode"}
      </Button>
    </Container>
  );
};
//style
const Container = styled("header")(({ theme }) => ({
  "&": {
    width: "100%",
    position: "fixed",
    zIndex: "1",
    top: "0",
    height: "6.31rem",
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "7.5rem",
    paddingRight: "7.5rem",
    alignItems: "center",
  },
}));
const Logo = styled("p")(() => ({
  "&": {
    fontWeight: "600",
    fontSize: "38px",
    lineHeight: "57px",
    color: "#ffffff",
    margin: "0",
  },
}));
