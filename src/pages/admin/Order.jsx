/* eslint-disable array-callback-return */
import styled from "@emotion/styled";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllorderMeals } from "../../store/order/order.thunk";

export const Orders = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.order.meals);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  useEffect(() => {
    dispatch(getAllorderMeals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const date = (day) => {
    const date = format(new Date(day), `dd.MM.yyyy`);
    return date;
  };
  const onChangePageHandler = (newPage) => {
    setPage(newPage);
  };
  const onChangeRowsPerPageHandler = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Meals</TableCell>
            <TableCell>Total Price</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meals.map((meal) => (
            <TableRow key={meal._id}>
              <TableCell component="th" scope="row">
                {meal.user.name}
              </TableCell>
              <TableCell>
                <StyledList>
                  {meal.items.map((item) => (
                    <li key={item._id}>
                      <h2>{item.title}</h2>
                      <h3>price:{item.price}</h3>
                      <h3>count: {item.amount}</h3>
                    </li>
                  ))}
                </StyledList>
              </TableCell>
              <TableCell>
                <h2>{meal.totalPrice}</h2>
              </TableCell>
              <TableCell>
                <h2>{date(meal.createdAt)}</h2>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={meals.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={onChangePageHandler}
              onRowsPerPageChange={onChangeRowsPerPageHandler}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

const StyledList = styled("ul")(() => ({
  listStyle: "none",
}));
