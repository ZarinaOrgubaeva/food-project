import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMeal, getMeals, postMeals } from "../../store/meals/meals.thunk";
import { MealsItem } from "./MealsItem";
import { MealsUpdate } from "./MealsUpdate";

export const Meals = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.meals);
  const [editMealId, setEditMealId] = useState(null);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    dispatch(getMeals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openModalHandler = () => {
    setOpenModal((prevState) => !prevState);
  };
  const submitHandler = async ({ title, description, price }) => {
    try {
      const data = {
        title,
        description,
        price,
      };
      await dispatch(postMeals(data));
      console.log(data, "sfd");
    } catch (error) {
      console.log("errorrrrr", error);
    }
  };

  const deleteMealHandler = async (id) => {
    try {
      await dispatch(deleteMeal(id));
    } catch (error) {
      console.log("error", error);
    }
  };
  const editHandler = (id) => {
    setEditMealId(id);
    setEdit(true);
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
    },
    onSubmit: submitHandler,
  });
  const { handleChange, handleSubmit, values } = formik;
  return (
    <Container>
      <h1>The Menu</h1>
      <Button onClick={openModalHandler} variant="contained">
        Add Meals
      </Button>
      {openModal && (
        // <MuiModal onClose={!openModalHandler} open={openModalHandler}>
        <FormStyled onSubmit={handleSubmit}>
          <TextField
            label="food Name"
            name="title"
            type="text"
            value={values.title}
            onChange={handleChange}
          />
          <TextField
            label="description"
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
          <TextField
            label="price"
            name="price"
            type="number"
            value={values.price}
            onChange={handleChange}
          />
          <div>
            <Button variant="contained" type="submit">
              Add new meals
            </Button>
            <Button variant="outlined" onClick={openModalHandler}>
              close
            </Button>
          </div>
        </FormStyled>
      )}
      <ul>
        {meals.map((item) => {
          return (
            <div key={item._id}>
              {editMealId === item._id && (
                <MealsUpdate item={item} setEdit={setEdit} onOpen={edit} />
              )}
              <MealsItem
                item={item}
                deleteMealHandler={deleteMealHandler}
                editHandler={editHandler}
                setEdit={setEdit}
              />
            </div>
          );
        })}
      </ul>
    </Container>
  );
};
const Container = styled("div")(() => ({
  marginLeft: "100px",
  color: "white",
}));
const FormStyled = styled("form")(() => ({
  "&": {
    display: "grid",
    gap: "15px",
    width: "600px",
    position: "fixed",
    top: "20vh",
    left: "25%",
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "14px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
    zIndex: "30",
  },
  Button: {
    marginTop: "10px",
    marginLeft: "10px",
  },
}));
