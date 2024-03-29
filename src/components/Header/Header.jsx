import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { getBasket } from "../../store/basket/basketSlice";
import BasketBtn from "./Basket/HeaderBtn";
import { uiActions } from "../../store/ui/uiSlice";
import Button from "../UI/Button";
import { singOut } from "../../store/auth/auth.thunk";
export const Header = ({ onShowBasket }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  let items = useSelector((state) => state.basket.items);
  const theme = useSelector((state) => state.ui.themeMode);
  const [animationClass, setAnimationClass] = useState("");
  const BtnNavigate = () => {
    navigate("/singIn");
  };
  const singOutHandler = () => {
    dispatch(singOut());
    navigate("/singIn");
  };
  const changeThemeHandler = () => {
    const themeMode = theme === "Light" ? "dark" : "Light";
    dispatch(uiActions.changeTheme(themeMode));
  };
  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const calculateTotalAmount = () => {
    const sum = items.reduce((summa, item) => summa + item.amount, 0);
    return sum;
  };
  useEffect(() => {
    setAnimationClass("bump");
    const id = setTimeout(() => {
      setAnimationClass("");
    }, 300);
    return () => {
      clearTimeout(id);
    };
  }, [items]);

  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo>ReactMeals</Logo>
      </Link>
      <BasketBtn
        className={animationClass}
        onClick={onShowBasket}
        count={calculateTotalAmount()}
      ></BasketBtn>
      {isAuthorized ? (
        <Button onClick={() => navigate("/userOrder")}>My Orders</Button>
      ) : null}
      <Button onClick={changeThemeHandler}>
        {theme === "Light" ? "Turn dark mode!" : "Turn light mode"}
      </Button>
      {isAuthorized ? (
        <Button onClick={singOutHandler}> Sing out</Button>
      ) : (
        <Button onClick={BtnNavigate}>Sing In</Button>
      )}
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
