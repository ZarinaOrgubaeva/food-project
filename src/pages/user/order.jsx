import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import { getOrderMeals } from "../../store/order/order.thunk";
export const Order = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.order.meals);
  useEffect(() => {
    dispatch(getOrderMeals());
  });
  return (
    <>
      <Header />
      <div>
        {meals.map((meal) => {
          return (
            <Container key={meal._id}>
              <p>Date: {meal.createdAt}</p>
              {meal.items.map((item) => {
                return (
                  <div key={item._id}>
                    <p>dish name: {item.title}</p>
                    <span> price: ${item.price}</span>
                  </div>
                );
              })}
            </Container>
          );
        })}
      </div>
    </>
  );
};

const Container = styled("div")(() => ({
  background: "white",
  display: "flex",
  flexDirection: "column",
  width: "600px",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "320px",
  marginTop: "150px",
}));
