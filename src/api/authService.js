import { axiosInstance } from "../config/axiosInstance";

const singUpRequest = (data) => {
  return axiosInstance.post("/auth/register", data);
};
const singInRequest = (data) => {
  return axiosInstance.post("/auth/login", data);
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  singUpRequest,
  singInRequest
};
