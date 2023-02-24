import {styled} from "@mui/system";
import Button from "../UI/Button";
import { ReactComponent as PlusSgv } from "../assets/icons/plus.svg";
import { ReactComponent as MinusSvg } from "../assets/icons/minus.svg";
export const BasketItem = ({
  title,
  price,
  amount,
  counterMinus,
  counterPluz,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <PriceAndAmountContainer>
          <Price>${price}</Price>
          <Amount>X{amount}</Amount>
        </PriceAndAmountContainer>
        <CounterContainer>
          <Button
            borderStyle="sqaured"
            variant="outLined"
            onClick={counterMinus}
          >
            <MinusSvg />
          </Button>
          <Button
            borderStyle="sqaured"
            variant="outLined"
            onClick={counterPluz}
          >
            <PlusSgv />
          </Button>
        </CounterContainer>
      </Content>
    </Container>
  );
};

const Container = styled('div')(()=>({
  padding: "24px 0",
  width: "100%",
  borderBottom: "1px solid #d6d6d6",
}))
  
const Title = styled('p')(()=>({
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "30px",
  color: "#222222",
  margin: "0",
  marginBottom: "0 0 12px 0",
}))
  
const Price = styled('p')(()=>({
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "27px",
  color: "#ad5502"
}))
  

const Amount = styled('span')(()=>({
  border: "1px solid #d6d6d6",
  borderRadius: "6px",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#222222",
  padding: "6px 14px",
  display: "block",
}))
  
const PriceAndAmountContainer = styled('div')(()=>({
  display: "flex",
  alignItems: "center",
  width: "153px",
  justifyContent: "space-between"
}))

const CounterContainer = styled('div')(()=>({
  display: "flex",
  gap: "14px"
}))
  
const Content = styled('div')(()=>({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginRight: "30px"
}))
 

