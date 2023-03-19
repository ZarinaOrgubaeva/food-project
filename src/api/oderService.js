import { axiosInstance } from "../config/axiosInstance";

export const addOrderRequests = (totalAmount) => {
  return axiosInstance.post("orders", { totalAmount });
};

export const getOrderRequests = () => {
  return axiosInstance.get("orders");
};
export const getAllMealsOrderRequests = () => {
  return axiosInstance.get("orders/all");
};
