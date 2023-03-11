import { axiosInstance } from "../config/axiosInstance";

const singUpRequest = (data) => {
  return axiosInstance.post("/auth/register", data);
};
const singInRequest = (data) => {
  return axiosInstance.post("/auth/login", data);
};
export default {
  singUpRequest,
  singInRequest
};
