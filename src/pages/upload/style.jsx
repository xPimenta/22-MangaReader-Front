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
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 15px 15px 15px 0px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  height: 300px;
  background-color: green;
`;

export const HorizontalListItem = styled.div`
  display: inline-block;
  margin-left: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   height: 100%;
   width: 180px;
   

   background-color: red;
`;

export const LatestChaptersWrapp = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 30px;
  width: clamp(400px, 100%, 90%);

  background-color: lightgray;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    heigth: 100vh;
  }
`;

export const VerticalList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 15px 15px 0px 15px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  height: 1165px;
  background-color: green;
`;

export const VerticalListItem = styled.div`
  flex: 0 0 auto;
  justify-content: center;
  margin-bottom: 15px;

  width: 100%;
  height: 100px;
  background-color: red;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(400px, 100%, 90%);
  height: 100px;
  background-color: lightgray;
`;
export const FooterContent = styled.div`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  margin-top: 15px;
`;
