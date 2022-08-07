import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.5rem;
  margin: 78px auto 43px auto;
  width: clamp(400px, 100%, 470px);

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    heigth: 100vh;
  }
`;

export const TimelineHeader = styled.h1`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;

  color: #ffffff;
`;

export const Background = styled.div`
  display: flex;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;
