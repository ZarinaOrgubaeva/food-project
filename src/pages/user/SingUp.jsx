import styled from "@emotion/styled";
import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import { UserRoles } from "../../lib/constants/common";
import { singUp } from "../../store/auth/auth.thunk";
export const SingUpPage = () => {
  const navigate = useNavigate();
  const distapch = useDispatch();
  const singUpBtnHandler = ({ email, name, password }) => {
    const data = {
      email,
      name,
      password,
      role: UserRoles.ADMIN,
    };
    distapch(singUp(data))
      .unwrap()
      .then(() => navigate("/"));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    },
    onSubmit: singUpBtnHandler,
  });
  const { handleChange, handleSubmit, values } = formik;
  return (
    <FormGrid>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={values.name}
          type="text"
          onChange={handleChange}
          name="name"
        />
        <TextField
          label="Email"
          value={values.email}
          onChange={handleChange}
          type="email"
          name="email"
        />
        <TextField
          label="Password"
          value={values.password}
          onChange={handleChange}
          type="password"
          name="password"
        />
        <TextField
          label="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          type="password"
          name="confirmPassword"
        />

        <Button type="submit">Sing Up</Button>
        <Link to="/singIn">{` Have an account?`}</Link>
      </form>
    </FormGrid>
  );
};
const FormGrid = styled(Grid)(() => ({
  "&": {
    width: "600px",
    margin: "230px 350px",
    padding: "20px",
    background: "white",
  },
  form: {
    display: "grid",
    gap: "15px",
  },
}));
