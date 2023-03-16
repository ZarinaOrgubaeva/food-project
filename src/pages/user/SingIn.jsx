import { Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import Button from "../../components/UI/Button";
import { useDispatch } from "react-redux";
import { singIn } from "../../store/auth/auth.thunk";
import { useState } from "react";

export const SingInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const submitHandler = ({ email, password }) => {
    const singInData = {
      email,
      password,
    };
    setError("");
    dispatch(singIn(singInData))
      .unwrap()
      .then(() => navigate("/admin"))
      .cath((error) => setError(error.response.data.message));
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: submitHandler,
  });
  const { handleChange, handleSubmit, values } = formik;
  const isEmailValid = () => {
    return (
      values.email.length === 0 ||
      (values.email.length > 0 && values.email.includes("@"))
    );
  };
  const isPasswordValid = () => {
    return (
      values.password.length === 0 ||
      (values.password.length > 0 && values.password >= 6)
    );
  };
  return (
    <FormGrid>
      <form onSubmit={handleSubmit}>
        <TextField
          error={!isEmailValid()}
          label="Email"
          value={values.email}
          onChange={handleChange}
          type="email"
          name="email"
        />
        <TextField
          error={!isPasswordValid}
          label="Password"
          value={values.password}
          onChange={handleChange}
          type="password"
          name="password"
        />
        {error && <StyledError>{error}</StyledError>}
        <Button type="submit">Sing In</Button>
        <Link to="/singUp">{`Don't have account?`}</Link>
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
const StyledError = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.error.main,
}));
