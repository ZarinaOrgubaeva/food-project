import styled from "styled-components";
const SummaryInfoCard = () => {
  return (
    <Card>
      <StyledtagH2>Delicious Food, Delivered To You</StyledtagH2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </p>
    </Card>
  );
};
const Card = styled.div`
  position: absolute;
  width: 854px;
  height: 270px;
  left: 293px;
  top: 358px;
  padding: 36px 40px;
  background: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
`;
const StyledtagH2 = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  color: #ffffff;
  margin-bottom: 28px;
`;
export default SummaryInfoCard;
