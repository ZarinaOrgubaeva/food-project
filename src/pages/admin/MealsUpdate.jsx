import { Button, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editMeal } from "../../store/meals/meals.thunk";
export const MealsUpdate = ({ item, setEdit, onClose, onOpen }) => {
  const dispatch = useDispatch();

  const updateMealHandler = async ({ title, description, price }) => {
    try {
      const updateMeals = {
        title,
        description,
        price,
      };

      const data = {
        id: item._id,
        editData: updateMeals,
      };
      await dispatch(editMeal(data)).unwrap();
      setEdit(false);
    } catch (error) {
     alert('error', error)
    }
  };
  const updateMealFormik = useFormik({
    initialValues: {
      title: item.title,
      description: item.description,
      price: item.price,
    },
    onSubmit: updateMealHandler,
  });

  const { values, handleChange, handleSubmit } = updateMealFormik;

  return (
    <StyledModal onClose={onClose} open={onOpen}>
      <StyledBox>
        <Form onSubmit={handleSubmit}>
          <TextField
            value={values.title}
            onChange={handleChange}
            name="title"
            label="Name"
            type="text"
          />
          <TextField
            value={values.description}
            onChange={handleChange}
            name="description"
            label="Description"
            type="text"
          />
          <TextField
            value={values.price}
            onChange={handleChange}
            name="price"
            label="Price"
            type="number"
          />
          <Button type="submit" variant="outlined">
            Save
          </Button>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
        </Form>
      </StyledBox>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)(() => ({
  display: "flex",
  width: "100%",
  height: "100%",
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
}));

const Form = styled("form")(() => ({
  display: "grid",
  gap: "20px",
  width: "50%",
  background: "#fff",
  padding: "20px",
  Button: {
    width: "200px",
    background: "#756f6f",
  },
}));
