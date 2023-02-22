import styled from "styled-components";
import Button from "../UI/Button";
export const TotalAmount = ({ price, onClose, onOrder }) => {
  console.log("TOtalamount");
 const orderButton = price > 0 ? <Button onClick={onOrder}>Order</Button> : null;
   const  fixedPrice=price.toFixed(2)
 return (
    <div>
      <InfoContainer>
        <Label>Total amount</Label>
        <Price>${fixedPrice}</Price>
      </InfoContainer>
      <ActionBtnsContainer>
        <Button variant="outLined" onClick={onClose}>
          Close
        </Button>
        {orderButton}
      </ActionBtnsContainer>
    </div>
  );
};
//style
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ActionBtnsContainer = styled.div`
  margin-top: 24px;
  gap: 16px;
  display: flex;
  justify-content: flex-end;
`;
const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin: 0;
`;
const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
  margin: 0;
`;
