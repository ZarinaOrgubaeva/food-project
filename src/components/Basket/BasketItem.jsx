import styled from "styled-components";
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
  console.log("BasketItem");
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

const Container = styled.div`
  padding: 24px 0;
  width: 100%;
  border-bottom: 1px solid #d6d6d6;
`;
const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin: 0;
  margin-bottom: 0 0 12px 0;
`;
const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
`;

const Amount = styled.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  padding: 6px 14px;
  display: block;
`;
const PriceAndAmountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 153px;
  justify-content: space-between;
`;

const CounterContainer = styled.div`
  display: flex;
  gap: 14px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
`;
