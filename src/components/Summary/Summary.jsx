import { memo } from "react";
import styled from "styled-components";
import BackgroundImg from "../assets/images/summary-background.jpg";
import SummaryInfoCard from "./SummaryInfoCard";
export const Summary = () => {
  return (
    <Container>
      <StyledImg src={BackgroundImg} alt="summary" />
      <SummaryInfoCard />
    </Container>
  );
};
memo(Summary);
const Container = styled.div`
  height: 527px;
`;
const StyledImg = styled.img`
  height: 404.5px;
`;
