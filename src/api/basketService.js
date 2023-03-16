import { axiosInstance } from "../config/axiosInstance";
export const mealsGet = () => {
  return axiosInstance.get("/foods");
};
export const getBasketMeals = () => {
  return axiosInstance.get("/basket");
};
export const postAddToBasket = (newItem) => {
  return axiosInstance.post(`foods/${newItem.id}/addToBasket`, {
    amount: newItem.amount,
  });
};
export const putUpdateBasket = (id, basketAmount) => {
  return axiosInstance.put(`/basketItem/${id}/update`, {
    amount: basketAmount,
  });
};
export const deleteBasketItems = (id) => {
  return axiosInstance.delete(`/basketItem/${id}/delete`);
};

