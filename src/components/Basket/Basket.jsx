import { useDispatch, useSelector } from "react-redux";
import {styled} from "@mui/system";
import {
  deleteBasketItem,
  submiteOrder,
  updateBasketItem,
} from "../../store/basket/basketSlice";
import { uiActions } from "../../store/UI/uiSlice";
import { MuiModal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
export const Basket = ({ onClose }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);
  const counterPluz = (id, amount) => {
    dispatch(updateBasketItem({ amount: amount + 1, id }));
  };
  const counterMinus = (id, amount) => {
    if (amount > 1) {
      dispatch(updateBasketItem({ amount: amount - 1, id }));
    } else {
      dispatch(deleteBasketItem(id));
    }
  };
  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  };

  const orderSubmiteHandler = async () => {
    try {
      await dispatch(
        submiteOrder({
          orderData: { items },
        })
      ).unwrap();
      dispatch(
        uiActions.showSnakebar({
          severity: "success",
          message: "Order completed successfully!",
        })
      );
      onClose();
    } catch (error) {
      dispatch(
        uiActions.showSnakebar({
          severity: "error",
          message: "Order failed, try again later",
        })
      );
    } finally {
      onClose();
    }
  };
  return (
    <>
      <MuiModal onClose={onClose} open={onClose}>
        <Content>
          {items.length ? (
            <FixedHeightContainer>
              {items.map((item) => {
                console.log('itemss basket', item)
                return (
                  <BasketItem
                    key={item._id}
                    counterPluz={() => counterPluz(item._id, item.amount)}
                    counterMinus={() => counterMinus(item._id, item.amount)}
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                  />
                );
              })}
            </FixedHeightContainer>
          ) : null}
          <TotalAmount
            price={getTotalPrice()}
            onClose={onClose}
            onOrder={orderSubmiteHandler}
          />
        </Content>
      </MuiModal>
    </>
  );
};

const Content = styled('div')(()=>({
  width: "100%",
  height: "100%",
  padding: "1.5rem 1rem",
}))
  
const FixedHeightContainer = styled('div')(()=>({
  maxHeight: "228px",
  overflowY: "scroll"
}))
  

