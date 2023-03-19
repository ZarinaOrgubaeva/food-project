import { axiosInstance } from "../config/axiosInstance";
export const mealsPostRequest = (data) => {
  return axiosInstance.post("/foods", data);
};
export const getMealsReq = () => {
  return axiosInstance.get("/foods");
};
export const editMealsReq = (data) => {
  return axiosInstance.put(`/foods/${data.id}`, data.editData);
};
export const deleteMealsReq = (id) => {
  return axiosInstance.delete(`/foods/${id}`);
};
