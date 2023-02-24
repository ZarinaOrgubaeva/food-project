import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";
import { getBasket } from "../../store/basket/basketSlice";
import BasketBtn from "./Basket/HeaderBtn";
export const Header = ({ onShowBasket }) => {
  const dispatch = useDispatch();
  let items = useSelector((state) => state.basket.items);
  const [animationClass, setAnimationClass] = useState("");

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
    </Container>
  );
};
//style
const Container = styled("header")(() => ({
  "&": {
    width: "100%",
    position: "fixed",
    zIndex: "1",
    top: "0",
    height: "6.31rem",
    background: "#8a2b06",
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
