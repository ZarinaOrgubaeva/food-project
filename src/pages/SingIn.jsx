import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import Button from "../components/UI/Button";
import { useDispatch } from "react-redux";
import { singIn } from "../store/auth/auth.thunk";

export const SingInPage = () => {
  const dispatch = useDispatch();
  const submitHandler = ({ email, password }) => {
    const singInData = {
      email,
      password,
    };
    dispatch(singIn(singInData));
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: submitHandler,
  });
  const { handleChange, handleSubmit, values } = formik;
  return (
    <FormGrid>
      <form onSubmit={handleSubmit}>
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
