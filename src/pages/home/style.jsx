import styled from "styled-components";

export const BannerWrap = styled.div`
  display: flex;
  justify-content: center;
  width: clamp(400px, 100%, 100%);
  height: 200px;

  background-color: grey;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    heigth: 100vh;
  }
`;

export const MostReadWrapp = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: clamp(400px, 100%, 90%);

  background-color: lightgray;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    heigth: 100vh;
  }
`;

export const ListName = styled.h1`

  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  margin-left: 15px;

  color: black;
`;

export const HorizontalList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 300px;
  background-color: green;
`;

export const HorizontalListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   height: 90%;
   width: 100px;

   background-color: red;
`;

export const LatestChapters = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: clamp(400px, 100%, 90%);

  background-color: lightgray;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    heigth: 100vh;
  }
`;

export const VerticalList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  height: 1000px;
  background-color: green;
`;
